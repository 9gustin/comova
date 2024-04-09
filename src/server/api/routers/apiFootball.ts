import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES, DEFAULT_TIMEZONE, type League } from "@/config";

type LeagueMatchsResponse = {
  response: Array<{
    fixture: {
      id: number;
      date: string;
      venue: {
        name: string;
      };
      status: {
        elapsed: number;
      };
    };
    league: {
      id: number;
      name: string;
      logo: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
    };
    goals: {
      home: number;
      away: number;
    };
  }>;
};

const getLeagueMatches = async ({
  league,
  from,
  to,
}: {
  league: League;
  from: string;
  to: string;
}) => {
  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/fixtures?season=${league.currentSeason}&league=${league.id}&from=${from}&to=${to}&timezone=${DEFAULT_TIMEZONE}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.APIFOOTBALL_KEY ?? "",
      },
    },
  );

  if (!apiResponse.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const { response } = (await apiResponse.json()) as LeagueMatchsResponse;

  return {
    ...league,
    matches: response.map(({ fixture, goals, teams }) => ({
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
    })),
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
