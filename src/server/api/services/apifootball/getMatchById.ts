import { env } from "@/env";
import { MATCH_BYID_RESPONSE } from "@/mocks/matchById";

export const getMatchById = async ({matchId}: {matchId: number}) => {
  if (env.MOCK_APIDATA) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return MATCH_BYID_RESPONSE;
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

  const { response } = await apiResponse.json();

  return response;
}