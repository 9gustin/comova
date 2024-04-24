import { Layout } from "@/components/Layout";
import { RenderMatchStatus } from "@/components/Match/Match";
import { TeamTeam } from "@/components/TempTable";
import { MatchStatus } from "@/types/matchStatus";
import { api } from "@/utils/api";
import { IconBallFootball } from "@tabler/icons-react";
import { useParams } from "next/navigation";

export default function MatchPage() {
  const params = useParams();
  const {
    data: matchData,
    isRefetching,
    refetch,
  } = api.apiFootball.getMatchById.useQuery(
    { matchId: params?.id ? Number(params.id) : 0 },
    { enabled: !!params?.id },
  );

  if (!params?.id || !matchData) return null;

  return (
    <Layout
      logo={matchData.league.logo}
      title={matchData.league.name}
      isRefetching={isRefetching}
      refetch={MatchStatus.Finished !== matchData.status ? refetch : undefined}
    >
      <div className="flex w-full justify-center">
        <RenderMatchStatus date={matchData.date} status={matchData.status} elapsed={matchData.elapsed} />
      </div>
      <div className="flex w-full gap-4 rounded-lg bg-base-200 px-2 py-4">
        <div className="flex w-1/2 flex-col items-end gap-4">
          <div className="flex w-full items-center justify-end gap-2">
            <TeamTeam
              goals={matchData.scoreboard.home.goals}
              logo={matchData.scoreboard.home.logo}
              iconClassName="w-12"
              scoreClassName="text-3xl"
              isHome
            />
          </div>
          <h2
            className="
            text-center
            text-xl
            font-semibold
        "
          >
            {matchData.scoreboard.home.team}
          </h2>
          <ul className="flex flex-col gap-2">
            {matchData.scoreboard.home.goalsInfo.map(({ player, time }) => (
              <li key={time} className="text-md flex items-start gap-2">
                <IconBallFootball size={16} />
                {player} ({time}&apos;)
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-1/2 flex-col items-start gap-4">
          <div className="flex w-full items-center justify-start gap-2">
            <TeamTeam
              goals={matchData.scoreboard.away.goals}
              logo={matchData.scoreboard.away.logo}
              name={matchData.scoreboard.away.team}
              iconClassName="w-12"
              scoreClassName="text-3xl"
            />
          </div>
          <h2
            className="
            text-center
            text-xl
            font-semibold
        "
          >
            {matchData.scoreboard.away.team}
          </h2>
          <ul className="flex flex-col gap-2">
            {matchData.scoreboard.away.goalsInfo.map(({ player, time }) => (
              <li key={time} className="text-md flex items-start gap-2">
                <IconBallFootball size={16} />
                {player} ({time}&apos;)
              </li>
            ))}
          </ul>
        </div>
      </div>
      {matchData.lineups?.home && matchData.lineups?.away && (
        <>
          <h3 className="w-full text-center text-lg font-semibold">
            Titulares
          </h3>
          <div className="flex w-full gap-4  rounded-lg bg-base-200 px-2 py-4">
            <ul className="flex w-1/2 flex-col gap-2">
              {matchData.lineups?.home?.startXI?.map(({ player }, index) => (
                <>
                  <li key={player.id} className="text-md text-right">
                    {player.number}. {player.name}
                  </li>
                  {/* show divider if next player are diferent player.pos */}
                  {index + 1 < matchData.lineups.home.startXI.length &&
                    player.pos !==
                      matchData.lineups.home.startXI[index + 1]?.player.pos && (
                      <div className="divider m-0" />
                    )}
                </>
              ))}
            </ul>
            <ul className="flex w-1/2 flex-col gap-2 ">
              {matchData.lineups?.away?.startXI?.map(({ player }, index) => (
                <>
                  <li key={player.id} className="text-md text-left">
                    {player.number}. {player.name}
                  </li>
                  {index + 1 < matchData.lineups.away.startXI.length &&
                    player.pos !==
                      matchData.lineups.away.startXI[index + 1]?.player.pos && (
                      <div className="divider m-0" />
                    )}
                </>
              ))}
            </ul>
          </div>
          <h3 className="w-full text-center text-lg font-semibold">
            En el banco
          </h3>
          <div className="flex w-full gap-4 rounded-lg bg-base-200 px-2 py-4">
            <ul className="flex w-1/2 flex-col gap-2">
              {matchData.lineups?.home?.substitutes?.map(({ player }) => (
                <li key={player.id} className="text-md text-right">
                  {player.number}. {player.name}
                </li>
              ))}
            </ul>
            <ul className="flex w-1/2 flex-col gap-2">
              {matchData.lineups?.away?.substitutes?.map(({ player }) => (
                <li key={player.id} className="text-md text-left">
                  {player.number}. {player.name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </Layout>
  );
}
