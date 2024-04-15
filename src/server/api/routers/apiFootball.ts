import { z } from "zod";
import requestIp from "request-ip";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES, DEFAULT_TIMEZONE, type League } from "@/config";
import { env } from "@/env";
import { LEAGUE_MATCHES_RESPONSE } from "@/mocks/apiResponse";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";
import { format } from "date-fns";
import { ratelimit } from "@/server/ratelimit";

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
  date,
}: {
  league: League;
  date: string;
}) => {
  if (env.MOCK_APIDATA) {
    return {
      ...league,
      matches: LEAGUE_MATCHES_RESPONSE.response.map(mapResponse).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    }
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
    matches: response.map(mapResponse).sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    ),
  };
};

export const apiRouterFootball = createTRPCRouter({
  getMatchesByDates: publicProcedure
    .input(z.object({ from: z.string(), to: z.string() }))
    .query(async ({ctx}) => {
      console.log({ctx})
      const {success} = await ratelimit.limit(ctx.ip!)
      
      if (!success) {
        throw new Error(`Too many requests from ${ctx.ip}`)
      }

      const leagues = await Promise.all(
        ACTIVE_LEAGUES.map((league) => {
          return getLeagueMatches({
            date: format(new Date(), "yyyy-MM-dd"),
            league,
          });
        }),
      )

      return leagues?.filter((league) => league.matches.length);
    })
});
