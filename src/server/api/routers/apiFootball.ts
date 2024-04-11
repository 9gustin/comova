import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES, DEFAULT_TIMEZONE, type League } from "@/config";
import { env } from "@/env";
import { LEAGUE_MATCHES_RESPONSE } from "@/mocks/apiResponse";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";

const mapResponse = ({ fixture, goals, teams }: LeagueMatchsResponse['response'][0]) => ({
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
})

const getLeagueMatches = async ({
  league,
  from,
  to,
}: {
  league: League;
  from: string;
  to: string;
}) => {
  if (env.MOCK_APIDATA) {
    return {
      ...league,
      matches: LEAGUE_MATCHES_RESPONSE.response.map(mapResponse),
    }
  }


  const apiResponse = await fetch(
        `https://v3.football.api-sports.io/fixtures?season=${league.currentSeason}&league=${league.id}&from=${from}&to=${to}&timezone=${DEFAULT_TIMEZONE}`,
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

  console.log("response", JSON.stringify(response));

  return {
    ...league,
    matches: response.map(mapResponse),
  };
};

export const apiRouterFootball = createTRPCRouter({
  getMatchesByDates: publicProcedure
    .input(z.object({ from: z.string(), to: z.string() }))
    .query(async ({ input }) => {
      return Promise.all(
        ACTIVE_LEAGUES.map((league) => {
          return getLeagueMatches({
            from: input.from,
            to: input.to,
            league,
          });
        }),
      );
    }),
});