import { env } from "@/env";
import { MOCK_STANDINGS_RESPONSE } from "@/mocks/leagueStandings";

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
          goalsDiff: number;
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
        .map(({ team, points, all, rank, goalsDiff }) => ({
          id: team.id,
          name: team.name,
          goalsDiff,
          logo: team.logo,
          points,
          played: all.played,
          rank,
        }))
        .sort((a, b) => a.rank - b.rank),
    };
  });



export const getLeagueStandings = async ({
  leagueId,
  season,
}: {
  leagueId: number;
  season: number;
}) => {
  if (env.MOCK_APIDATA) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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

  return {
    leagueId,
    standings: mapStandingsResponse(response),
  };
};