import { COPADELALIGA_ARG } from "@/config";
import { IconChevronLeft, IconReload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { TeamTeam, TempTable } from "@/components/TempTable";
import { useMemo, useState } from "react";
import { api } from "@/utils/api";
import { Team } from "@/components/Match/Match";

const LEAGUE = {
  ...COPADELALIGA_ARG,
  name: "Definicion Grupo B",
};
const { name, logo } = LEAGUE;

const TEMP_TABLE = [
  {
    id: 439,
    name: "Godoy Cruz",
    goalsDiff: 11,
    logo: "https://media.api-sports.io/football/teams/439.png",
    points: 29,
    played: 13,
    rank: 1,
  },
  {
    id: 450,
    name: "Estudiantes L.P.",
    goalsDiff: 9,
    logo: "https://media.api-sports.io/football/teams/450.png",
    points: 24,
    played: 13,
    rank: 2,
  },
  {
    id: 446,
    name: "Lanus",
    goalsDiff: 7,
    logo: "https://media.api-sports.io/football/teams/446.png",
    points: 23,
    played: 13,
    rank: 3,
  },
  {
    id: 442,
    name: "Defensa Y Justicia",
    goalsDiff: 3,
    logo: "https://media.api-sports.io/football/teams/442.png",
    points: 23,
    played: 13,
    rank: 4,
  },
  {
    id: 451,
    name: "Boca Juniors",
    goalsDiff: 7,
    logo: "https://media.api-sports.io/football/teams/451.png",
    points: 22,
    played: 13,
    rank: 5,
  },
  {
    id: 436,
    name: "Racing Club",
    goalsDiff: 9,
    logo: "https://media.api-sports.io/football/teams/436.png",
    points: 21,
    played: 13,
    rank: 6,
  },
  {
    id: 457,
    name: "Newells Old Boys",
    goalsDiff: -1,
    logo: "https://media.api-sports.io/football/teams/457.png",
    points: 21,
    played: 13,
    rank: 7,
  },
];

const GROUP_A_CLASIF = {
  3: {
    id: 435,
    name: "River Plate",
    logo: "https://media.api-sports.io/football/teams/435.png",
  },
  2: {
    id: 458,
    name: "Argentinos JRS",
    logo: "https://media.api-sports.io/football/teams/458.png",
  },
  1: {
    id: 2432,
    name: "Barracas Central",
    logo: "https://media.api-sports.io/football/teams/2432.png",
  },
  0: {
    id: 438,
    name: "Velez Sarsfield",
    logo: "https://media.api-sports.io/football/teams/438.png",
  },
};

const KEYS_SORT = [3, 1, 0, 2];

export default function GrupoB() {
  const router = useRouter();
  const {
    data: liveEvents,
    isRefetching,
    refetch,
  } = api.apiFootball.getGroupBLiveEvents.useQuery();
  const [showRefresh, setShowRefresh] = useState(true);

  const handleRefresh = async () => {
    setShowRefresh(false);
    await refetch().then(() => {
      setTimeout(() => {
        setShowRefresh(true);
      }, 10000);
    });
  };

  const table = useMemo(() => {
    const currentTable = TEMP_TABLE.map((team) => {
      const match = liveEvents?.find(
        (liveTeam) =>
          liveTeam.homeTeam.id === team.id || liveTeam.awayTeam.id === team.id,
      );

      if (!match) {
        return team;
      }

      const { current, rival } =
        match.homeTeam.id === team.id
          ? { current: match.homeTeam, rival: match.awayTeam }
          : { current: match.awayTeam, rival: match.homeTeam };

      const addPoints =
        current.goals > rival.goals ? 3 : current.goals === rival.goals ? 1 : 0;
      const addGoalsDiff = current.goals - rival.goals;

      return {
        ...team,
        points: team.points + addPoints,
        goalsDiff: team.goalsDiff + addGoalsDiff,
      };
    });

    // sort by points and then goalsDiff
    return currentTable
      .sort((a, b) => {
        if (a.points === b.points) {
          return b.goalsDiff - a.goalsDiff;
        }
        return b.points - a.points;
      })
      .map((team, index) => ({
        ...team,
        rank: index + 1,
      }));
  }, [liveEvents]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex w-full items-center justify-between gap-2">
        <button
          className="btn btn-circle btn-sm"
          onClick={() => {
            router.push("/");
          }}
        >
          <IconChevronLeft />
        </button>
        <div className="flex flex-1 gap-4">
          <img
            src={logo}
            alt={`Logo de la liga ${name}`}
            style={{
              height: 40,
              width: "auto",
            }}
          />
          <h1 className="card-title gap-4 text-xl">{name}</h1>
        </div>
      </div>
      <div
        className={`flex w-full flex-wrap ${isRefetching ? "opacity-60" : ""}`}
      >
        {!liveEvents?.length && (
          <div className="flex w-full items-center justify-center gap-2 text-gray-400">
            <span>Aca podras ver los resultados en tiempo real</span>
          </div>
        )}
        {liveEvents?.map(({ id, homeTeam, awayTeam, elapsed }) => (
          <div key={id} className="flex w-1/2 items-center gap-2 rounded p-1">
            <span className="text-sm text-gray-500">{elapsed}'</span>
            <div className="flex w-full items-center justify-between gap-2 bg-teal-900 p-1">
              <TeamTeam {...homeTeam} isHome />
              -
              <TeamTeam {...awayTeam} />
            </div>
          </div>
        ))}
      </div>
      <TempTable table={table} />
      <h2 className="text-lg font-semibold">Cuartos de final</h2>
      <div className="flex flex-wrap gap-4">
        {KEYS_SORT.map((key) => {
          const team = GROUP_A_CLASIF[key];

          if (key === 0 || key === 1) {
            return (
              <>
                {key === 0 && <div className="divider m-0 w-full" />}
                <div key={key} className="flex w-full gap-4">
                  <Team key={key} {...table[key]} isHome />
                  <span className="text-gray-500">-</span>
                  <Team key={key} {...team} />
                </div>
              </>
            );
          }
          return (
            <div key={key} className="flex w-full gap-4">
              <Team key={key} {...team} isHome />
              <span className="text-gray-500">-</span>
              <Team key={key} {...table[key]} />
            </div>
          );
        })}
      </div>
      {showRefresh && (
        <button
          className="btn btn-circle btn-outline fixed bottom-4 right-4 bg-gray-800 shadow-md shadow-gray-700"
          onClick={handleRefresh}
          disabled={isRefetching}
        >
          {isRefetching && <span className="loading loading-spinner"></span>}
          {!isRefetching && <IconReload />}
        </button>
      )}
    </div>
  );
}
