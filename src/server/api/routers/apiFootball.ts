import { z } from "zod";

import { createTRPCRouter, rateLimitProcedure } from "@/server/api/trpc";
import { ACTIVE_LEAGUES, COPADELALIGA_ARG, DEFAULT_TIMEZONE } from "@/config";
import { getLeagueMatches } from "../services/apifootball/getMatchLeagues";
import { getLeagueStandings } from "../services/apifootball/getLeagueStandings";
import { getMatchById } from "../services/apifootball/getMatchById";
import { env } from "@/env";
import { groupBEvent } from "../services/apifootball/groupBEvent";
import { isSameDay } from "date-fns";

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

      return leagues?.filter((league) => league.matches.length);
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
    getGroupBLiveEvents: rateLimitProcedure
    .query(async () => {
      return groupBEvent()
    })

});
