import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES, DEFAULT_TIMEZONE, type League } from "@/config";
import { env } from "@/env";
import { LEAGUE_MATCHES_RESPONSE } from "@/mocks/apiResponse";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";
import { format } from "date-fns";
import { ratelimit } from "@/server/ratelimit";
import { MOCK_STANDINGS_RESPONSE } from "@/mocks/leagueStandings";

const mapResponse = ({
  fixture,
  goals,
  teams,
}: LeagueMatchsResponse["response"][0]) => ({
  id: fixture.id,
  date: fixture.date,
  venue: fixture.venue.name,
  status: fixture.status.elapsed,
  homeTeam: {
    id: teams.home.id,
    name: teams.home.name,
    logo: teams.home.logo,
    goals: goals.home,
    winner: teams.home.winner,
  },
  awayTeam: {
    id: teams.away.id,
    name: teams.away.name,
    logo: teams.away.logo,
    goals: goals.away,
    winner: teams.away.winner,
  },
});

const mapStandingsResponse = (
  standings: Array<{
    league: {
      standings: Array<
        Array<{
          rank: number;
          team: {
            id: number;
            name: string;
            logo: string;
          };
          points: number;
          group: string;
          all: {
            played: number;
          };
        }>
      >;
    };
  }>,
) =>
  standings[0]?.league.standings.map((standing) => {
    return {
      name: standing[0]?.group,
      standings: standing
        .map(({ team, points, all, rank }) => ({
          id: team.id,
          name: team.name,
          logo: team.logo,
          points,
          played: all.played,
          rank,
        }))
        .sort((a, b) => a.rank - b.rank),
    };
  });

const getLeagueMatches = async ({
  league,
  date,
}: {
  league: League;
  date: string;
}) => {
  if (env.MOCK_APIDATA) {
    return {
      ...league,
      matches: LEAGUE_MATCHES_RESPONSE.response
        .map(mapResponse)
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
        ),
    };
  }

  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/fixtures?season=${league.currentSeason}&league=${league.id}&date=${date}&timezone=${DEFAULT_TIMEZONE}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": env.APIFOOTBALL_KEY,
      },
    },
  );

  if (!apiResponse.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const { response } = (await apiResponse.json()) as LeagueMatchsResponse;

  return {
    ...league,
    matches: response
      .map(mapResponse)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
  };
};

const getLeagueStandings = async ({
  leagueId,
  season,
}: {
  leagueId: number;
  season: number;
}) => {
  if (env.MOCK_APIDATA) {
    return {
      leagueId,
      standings: mapStandingsResponse(MOCK_STANDINGS_RESPONSE as any),
    };
  }

  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/standings?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": env.APIFOOTBALL_KEY,
      },
    },
  );

  if (!apiResponse.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const { response } = await apiResponse.json();

  console.log(response[0]?.league.standings);

  return {
    leagueId,
    standings: mapStandingsResponse(response as any),
  };
};

export const apiRouterFootball = createTRPCRouter({
  getMatchesByDates: publicProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ ctx , input}) => {
      const { success } = await ratelimit.limit(ctx.ip!);

      if (!success) {
        throw new Error(`Too many requests from ${ctx.ip}`);
      }

      const leagues = await Promise.all(
        ACTIVE_LEAGUES.map((league) => {
          return getLeagueMatches({
            date: input.date,
            league,
          });
        }),
      );

      return leagues?.filter((league) => league.matches.length);
    }),
  getLeagueStandings: publicProcedure
    .input(z.object({ leagueId: z.number() }))
    .query(async ({ ctx, input }) => {
      const activeLeague = ACTIVE_LEAGUES.find(
        (league) => league.id == input.leagueId,
      );
      if (!activeLeague) {
        throw new Error("Invalid leagueId");
      }

      const { success } = await ratelimit.limit(ctx.ip!);

      if (!success) {
        throw new Error(`Too many requests from ${ctx.ip}`);
      }

      const standings = await getLeagueStandings({
        leagueId: activeLeague.id,
        season: activeLeague.currentSeason,
      });

      return standings;
    }),
});
