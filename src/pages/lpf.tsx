import { LPF_ARG } from "@/config";
import { IconChevronLeft, IconReload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { TeamTeam, TempTable } from "@/components/TempTable";
import { useState } from "react";
import { api } from "@/utils/api";

const { name, logo } = LPF_ARG;

export default function GrupoB() {
  const router = useRouter();

  const {
    data,
    isRefetching,
    refetch,
  } = api.apiFootball.getLPFDefinition.useQuery();

  console.log(data)
  const liveEvents = data?.liveEvents
  const table = []
  const [showRefresh, setShowRefresh] = useState(true);

  const handleRefresh = async () => {
    setShowRefresh(false);
    await refetch().then(() => {
      setTimeout(() => {
        setShowRefresh(true);
      }, 10000);
    });
  };

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
        {liveEvents?.[0]?.elapsed && (
          <div className="flex w-1/4 items-center gap-1 p-1">
            <div className="flex w-full items-center  bg-teal-700 py-1 rounded text-white justify-center">
              {liveEvents[0].elapsed}' aprox
            </div>
          </div>
        )}
                  
        {liveEvents?.map(({ id, homeTeam, awayTeam, elapsed }) => (
          <div key={id} className="flex w-1/4 items-center gap-1 p-1">
            <div className="flex w-full items-center justify-between bg-teal-900 py-1 rounded ">
              <TeamTeam {...homeTeam} isHome />
              -
              <TeamTeam {...awayTeam} />
            </div>
          </div>
        ))}
      </div>
      <TempTable table={table} />
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
