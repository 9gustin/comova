import Head from "next/head";
import Link from "next/link";
import { es } from "date-fns/locale";

import { api } from "@/utils/api";
import { format } from "date-fns";
import { League } from "@/components/League";
import { IconReload } from "@tabler/icons-react";
import { useState } from "react";

export default function Home({ today = format(new Date(), "yyyy-MM-dd") }) {
  const {
    data: leagues,
    isLoading,
    refetch,
    isRefetching,
  } = api.apiFootball.getMatchesByDates.useQuery({
    date: today,
  });
  const [showRefresh, setShowRefresh] = useState(true);

  const handleRefresh = async () => {
    setShowRefresh(false);
    await refetch().then(() => {
      setTimeout(() => {
        setShowRefresh(true);
      }, 10000);
    });
  }

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Como va? | @9gustin</title>
        <meta
          name="description"
          content="Como va el partido que estas siguiendo"
        />
        <link rel="icon" href="/comova.png" />
      </Head>
      <div
        className={`flex flex-1 flex-col items-center gap-6 bg-base-300 p-4 ${isRefetching ? "opacity-50" : ""}`}
        style={{
          minHeight: "100vh",
        }}
      >
        <header className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4">
            <img src="/comova.png" alt="Logo de la app" className="h-12" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Como va?</h1>
              <Link
                target="_blank"
                href="https://cafecito.app/9gustin"
                className="m-0 p-0 text-sm text-gray-300 underline"
              >
                by @9gustin ;)
              </Link>
            </div>
          </div>
          <h2 className="flex flex-col items-center">
            <b>{format(new Date(), "eeee", { locale: es })}</b>
            {format(new Date(), "d/MM", { locale: es })}
          </h2>
        </header>
        {leagues?.length ? (
          <ul className="flex w-full max-w-lg flex-1 flex-col gap-4 ">
            {leagues.map((league) => (
              <League key={league.id} {...league} />
            ))}
          </ul>
        ) : (
          <div className="flex flex-1 items-center">
            <p className="text-center text-gray-500">No hay partidos :(</p>
          </div>
        )}
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
    </>
  );
}
