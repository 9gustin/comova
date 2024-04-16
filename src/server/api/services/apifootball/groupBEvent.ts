import { COPADELALIGA_ARG, DEFAULT_TIMEZONE } from "@/config";
import { env } from "@/env";
import { MOCK_LIVE_EVENTS } from "@/mocks/liveEvents";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";
import { mapMatchStatus } from "@/types/matchStatus";

const mapResponse = (r) =>
  r.map((match) => ({
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

export const groupBEvent = async () => {
  if (env.MOCK_APIDATA) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mapResponse(MOCK_LIVE_EVENTS);
  }

  const apiResponse = await fetch(
    `https://v3.football.api-sports.io/fixtures?league=${COPADELALIGA_ARG.id}&live=all&timezone=${DEFAULT_TIMEZONE}`,
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

  return mapResponse(response);
};
