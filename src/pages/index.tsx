import Head from "next/head";
import Link from "next/link";
import { es } from "date-fns/locale";

import { api } from "@/utils/api";
import { endOfDay, format, startOfDay } from "date-fns";
import { League } from "@/components/League";

export default function Home({
  today = format(startOfDay(new Date()), "yyyy-MM-dd HH:mm:ss"),
}) {
  const { data: leagues, isLoading } =
    api.apiFootball.getMatchesByDates.useQuery({
      from: today,
      to: format(endOfDay(today), "yyyy-MM-dd HH:mm:ss"),
    });

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
        className="flex flex-1 flex-col items-center gap-6 bg-base-300 p-4"
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
                href="https://9gu.dev"
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
    </>
  );
}
