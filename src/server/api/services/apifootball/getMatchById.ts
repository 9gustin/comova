import { env } from "@/env";
import { MATCH_BYID_RESPONSE } from "@/mocks/matchById";
import { type Lineup, type MatchEventsResponse } from "@/types/matchEvents";
import { type MatchStatus, mapMatchStatus } from "@/types/matchStatus";

export type MatchEventsData = {
  id: number;
  elapsed: number;
  status: MatchStatus;
  date: Date;
  league: {
    name: string;
    logo: string;
    id: number;
  };
  scoreboard: {
    home: {
      team: string;
      logo: string;
      id: number;
      goals: number;
      goalsInfo: {
        player: string;
        time: number;
      }[];
    };
    away: {
      team: string;
      logo: string;
      id: number;
      goals: number;
      goalsInfo: {
        player: string;
        time: number;
      }[];
    };
  };
  lineups: {
    home: Lineup;
    away: Lineup;
  };
}

const mapResponse = (match: MatchEventsResponse): MatchEventsData => {
  return {
    id: match.fixture.id,
    elapsed: match.fixture.status.elapsed,
    status: mapMatchStatus(match.fixture.status.short),
    date: new Date(match.fixture.date),
    league: {
      name: match.league.name,
      logo: match.league.logo,
      id: match.league.id,
    },
    scoreboard: {
      home: {
        team: match.teams.home.name,
        logo: match.teams.home.logo,
        id: match.teams.home.id,
        goals: match.goals.home,
        goalsInfo: match.events.filter((event) => event.type === "Goal" && event.team.id === match.teams.home.id).map((goal) => ({
          player: goal.player.name,
          time: goal.time.elapsed + (goal.time.extra ?? 0),
        })),
      },
      away: {
        team: match.teams.away.name,
        goals: match.goals.away,
        logo: match.teams.away.logo,
        id: match.teams.away.id,
        goalsInfo: match.events.filter((event) => event.type === "Goal" && event.team.id === match.teams.away.id).map((goal) => ({
          player: goal.player.name,
          time: goal.time.elapsed + (goal.time.extra ?? 0),
        })),
      },
    },
    lineups: {
      home: match.lineups.find((lineup) => lineup.team.id === match.teams.home.id)!,
      away: match.lineups.find((lineup) => lineup.team.id === match.teams.away.id)!,
    },
  }
}

export const getMatchById = async ({matchId}: {matchId: number}) => {
  if (env.MOCK_APIDATA) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return MATCH_BYID_RESPONSE?.[0] ? mapResponse(MATCH_BYID_RESPONSE[0]) : null;
  }

  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/fixtures?id=${matchId}`,
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

  const { response } = await apiResponse.json() as {response: MatchEventsResponse[]};

  return response?.[0] ? mapResponse(response[0]) : null;
}