import { ACTIVE_LEAGUES } from "@/config";
import { api } from "@/utils/api";
import { IconChevronLeft } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";

const LeagueTable = ({ table }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="text-left">Equipo</th>
          <th className="text-center">Puntos</th>
          <th className="text-right">PJ</th>
        </tr>
      </thead>
      <tbody>
        {table.map(({id, name, logo, points, played, rank}) => (
          <tr key={id}>
            <td className="flex h-10 items-center gap-4">
              <img
                src={logo}
                alt={`Logo de ${name}`}
                style={{
                  height: 20,
                  width: "auto",
                }}
              />
              {name}
            </td>
            <td className="text-center">{points}</td>
            <td className="text-right">{played}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function LeaguePage() {
  const params = useParams();
  const router = useRouter();

  const { data: tableData } = api.apiFootball.getLeagueStandings.useQuery(
    {
      leagueId: params?.id ? Number(params?.id) : 0,
    },
    {
      enabled: !!params?.id,
    },
  );

  if (!params?.id) return null;

  const leagueData = ACTIVE_LEAGUES.find(
    (league) => league.id === Number(params.id),
  );

  if (!leagueData) return null;

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
            src={leagueData?.logo}
            alt={`Logo de la liga ${leagueData.name}`}
            style={{
              height: 40,
              width: "auto",
            }}
          />
          <h1 className="card-title gap-4 text-xl">{leagueData.name}</h1>
        </div>
      </div>
      {tableData?.standings?.map((standing) => (
        <LeagueTable key={standing.name} table={standing.standings} />
      ))}
    </div>
  );
}
