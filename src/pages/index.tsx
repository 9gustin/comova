import Head from "next/head";
import Link from "next/link";
import { es } from "date-fns/locale";

import { api } from "@/utils/api";
import {
  addDays,
  format,
  isToday,
  isTomorrow,
  isYesterday,
  subDays,
} from "date-fns";
import { League } from "@/components/League";
import {
  IconChevronLeft,
  IconChevronRight,
  IconReload,
} from "@tabler/icons-react";
import { useState } from "react";

const mapDate = (d: Date) => format(d, "yyyy-MM-dd");

export default function Home() {
  const [date, setDate] = useState(new Date());
  const {
    data: leagues,
    isLoading,
    refetch,
    isRefetching,
  } = api.apiFootball.getMatchesByDates.useQuery({
    date: mapDate(date),
  });
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
                target="_blank"
                href="https://cafecito.app/9gustin"
                className="m-0 p-0 text-sm font-light underline"
              >
                by @9gustin ;)
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-circle btn-sm"
              onClick={() => {
                setDate(subDays(date, 1));
              }}
            >
              <IconChevronLeft />
            </button>
            <span className="flex flex-col items-center">
              {isToday(date) ? (
                <b>Hoy</b>
              ) : isTomorrow(date) ? (
                <b>Mañana</b>
              ) : isYesterday(date) ? (
                <b>Ayer</b>
              ) : (
                <>
                  <b>{format(date, "eeee", { locale: es })}</b>
                  {format(date, "d/MM", { locale: es })}
                </>
              )}
            </span>
            <button
              className="btn btn-circle btn-sm"
              onClick={() => {
                setDate(addDays(date, 1));
              }}
            >
              <IconChevronRight />
            </button>
          </div>
        </header>
        {leagues?.length || isLoading ? (
          <ul className="flex w-full max-w-lg flex-1 flex-col gap-4 ">
            {leagues?.map((league) => <League key={league.id} {...league} />)}
          </ul>
        ) : (
          <div className="flex flex-1 items-center">
            <p className="text-center text-gray-500">No hay partidos :(</p>
          </div>
        )}
      </div>
      {showRefresh && (
        <button
          className="btn btn-circle btn-outline fixed bottom-4 right-4 shadow-md"
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
