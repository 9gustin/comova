/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DEFAULT_TIMEZONE, LPF_ARG } from "@/config";
import { env } from "@/env";
import { LIVE_EVENTS, LPF_STANDINGS, PREQUALIFIED_TEAMS } from "@/mocks/lpfDefinition";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";
import { mapMatchStatus } from "@/types/matchStatus";

const mapLiveMatch = (r: any) =>
  r.map((match: any) => ({
    id: match.fixture.id,
    status: mapMatchStatus(match.fixture.status.short),
    elapsed: match.fixture.status.elapsed,
    homeTeam: {
      id: match.teams.home.id,
      name: match.teams.home.name,
      logo: match.teams.home.logo,
      goals: match.goals.home,
    },
    awayTeam: {
      id: match.teams.away.id,
      name: match.teams.away.name,
      logo: match.teams.away.logo,
      goals: match.goals.away,
    },
    events: match.events,
  }));

const mapResponse = (apiResponse: any): any => {
  const liveEvents = mapLiveMatch(apiResponse)
  const annualPositions = LPF_STANDINGS.response[0]?.league.standings[0]?.map(team => {
    return {}
  })

  const lpfPositions = LPF_STANDINGS.response[0]?.league.standings[0]?.map(team => {
    return {}
  })


  return {
    liveEvents,
    lpfPositions,
    prequalified: PREQUALIFIED_TEAMS,
    annualPositions,
  }
}

export const getLPFDefinition = async ():any => {
  if (env.MOCK_APIDATA) {
    const response = LIVE_EVENTS;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mapResponse(response);
  }

  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/fixtures?league=${LPF_ARG.id}&live=all&timezone=${DEFAULT_TIMEZONE}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": env.APIFOOTBALL_KEY,
      },
    },
  );

  // console.log({apiResponse});

  if (!apiResponse.ok) {
    throw new Error("Failed to fetch data from API");
  }

  const { response } = (await apiResponse.json()) as LeagueMatchsResponse;

  return mapResponse(response);
};
