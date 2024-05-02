import { DEFAULT_TIMEZONE, type League } from "@/config";
import { env } from "@/env";
import { LEAGUE_MATCHES_RESPONSE } from "@/mocks/apiResponse";
import { type LeagueMatchsResponse } from "@/types/leagueMatches";
import { mapMatchStatus, showStatusFirst } from "@/types/matchStatus";

const mapResponse = ({
  fixture,
  goals,
  teams,
  score
}: LeagueMatchsResponse["response"][0]) => ({
  id: fixture.id,
  date: fixture.date,
  venue: fixture.venue.name,
  status: mapMatchStatus(fixture.status.short),
  elapsed: fixture.status.elapsed,
  homeTeam: {
    id: teams.home.id,
    name: teams.home.name,
    logo: teams.home.logo,
    goals: goals.home,
    penalty: score.penalty?.home,
    winner: teams.home.winner,
  },
  awayTeam: {
    id: teams.away.id,
    name: teams.away.name,
    logo: teams.away.logo,
    goals: goals.away,
    penalty: score.penalty?.away,
    winner: teams.away.winner,
  },
});


const sortAndMap = (response: LeagueMatchsResponse["response"]) => {
  return response
    .map(mapResponse)
    .sort((a, b) => {
      if (showStatusFirst(a.status) && !showStatusFirst(b.status)) {
        return -1;
      }
      if (!showStatusFirst(a.status) && showStatusFirst(b.status)) {
        return 1;
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
};

export const getLeagueMatches = async ({
  league,
  date,
}: {
  league: League;
  date: string;
}) => {
  if (env.MOCK_APIDATA) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return {
      ...league,
      matches: sortAndMap(LEAGUE_MATCHES_RESPONSE.response),
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
    response,
    matches: sortAndMap(response)
  };
};
