import { z } from "zod";

import { createTRPCRouter, rateLimitProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES } from "@/config";
import { getLeagueMatches } from "../services/apifootball/getMatchLeagues";
import { getLeagueStandings } from "../services/apifootball/getLeagueStandings";
import { getMatchById } from "../services/apifootball/getMatchById";
import { groupBEvent } from "../services/apifootball/groupBEvent";
import { isLiveStatus } from "@/types/matchStatus";

export const apiRouterFootball = createTRPCRouter({
  getMatchesByDates: rateLimitProcedure
    .input(z.object({ date: z.string() }))
    .query(async ({ input }) => {
      const leagues = await Promise.all(
        ACTIVE_LEAGUES.map((league) => {
          return getLeagueMatches({
            date: input.date,
            league,
          });
        }),
      );

      return leagues
        ?.filter((league) => league.matches.length)
        .sort((a, b) => {
          const aHasLive = a.matches.some((m) => isLiveStatus(m.status));
          const bHasLive = b.matches.some((m) => isLiveStatus(m.status));

          if (aHasLive && !bHasLive) {
            return -1;
          }
          if (!aHasLive && bHasLive) {
            return 1;
          }

          const aNextMatch = a.matches.find((m) => !isLiveStatus(m.status));
          const bNextMatch = b.matches.find((m) => !isLiveStatus(m.status));

          if (!aNextMatch || !bNextMatch) {
            return 0;
          }

          return (
            new Date(aNextMatch.date).getTime() -
            new Date(bNextMatch.date).getTime()
          );
        });
    }),
  getLeagueStandings: rateLimitProcedure
    .input(z.object({ leagueId: z.number() }))
    .query(async ({ input }) => {
      const activeLeague = ACTIVE_LEAGUES.find(
        (league) => league.id == input.leagueId,
      );

      if (!activeLeague) {
        throw new Error("Invalid leagueId");
      }

      const standings = await getLeagueStandings({
        leagueId: activeLeague.id,
        season: activeLeague.currentSeason,
      });

      return standings;
    }),
  getMatchById: rateLimitProcedure
    .input(z.object({ matchId: z.number() }))
    .query(async ({ input }) => {
      const match = await getMatchById({
        matchId: input.matchId,
      });

      return match;
    }),
  getGroupBLiveEvents: rateLimitProcedure.query(async () => {
    return groupBEvent();
  }),
});
