import { Layout } from "@/components/Layout";
import { ACTIVE_LEAGUES } from "@/config";
import { api } from "@/utils/api";
import { IconChevronLeft } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";

export const LeagueTable = ({ table }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="text-left">Equipo</th>
          <th className="text-center">Puntos</th>
          <th className="text-right">DIF</th>
        </tr>
      </thead>
      <tbody>
        {table.map(({ id, name, logo, points, goalsDiff, rank }) => (
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
            <td className="text-right">{goalsDiff}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function LeaguePage() {
  const params = useParams();
  const router = useRouter();

  const {
    data: tableData,
    isLoading,
    refetch,
    isRefetching,
  } = api.apiFootball.getLeagueStandings.useQuery(
    {
      leagueId: params?.id ? Number(params?.id) : 0,
    },
    {
      enabled: !!params?.id,
    },
  );

  if (!params?.id) return null;

  if (isLoading) {
    return (
      <Layout logo="" title="Cargando...">
        <div className="rounded-md skeleton h-8 w-full"></div>
        <div className="rounded-md skeleton h-8 w-full"></div>
        <div className="rounded-md skeleton h-8 w-full"></div>
        <div className="rounded-md skeleton h-8 w-full"></div>
        <div className="rounded-md skeleton h-8 w-full"></div>
        <div className="rounded-md skeleton h-8 w-full"></div>
      </Layout>
    );
  }

  const leagueData = ACTIVE_LEAGUES.find(
    (league) => league.id === Number(params.id),
  );

  if (!leagueData) return null;

  return (
    <Layout
      logo={leagueData.logo}
      title={leagueData.name}
      refetch={refetch}
      isRefetching={isRefetching}
    >
      {tableData?.standings?.map((standing) => (
        <LeagueTable key={standing.name} table={standing.standings} />
      ))}
    </Layout>
  );
}
