import Head from "next/head";
import Link from "next/link";
import { es } from "date-fns/locale";

import { api } from "@/utils/api";
import { addDays, format, isSameDay } from "date-fns";
import { useMemo, useState } from "react";

const Team = ({ goals, logo, name }: any) => (
  <div className="flex items-center gap-2 font-semibold">
    <p className="mr-4 text-lg">{goals}</p>
    <div className="avatar">
      <div className="w-8 rounded">
        <img src={logo || ""} alt={name} />
      </div>
    </div>
    <p className="text-lg">{name}</p>
  </div>
);

export default function Home({
  initialDates = format(new Date(), "yyyy-MM-dd"),
}) {
  const [viewToday, setViewToday] = useState(true);
  const { data: leagues, isLoading } =
    api.apiFootball.getMatchesByDates.useQuery({
      from: initialDates,
      to: format(addDays(initialDates, 7), "yyyy-MM-dd"),
    });

  const ACTIVE_CLASS = "bg-gray-700 rounded-md";

  const filteredLeagues = useMemo(() => {
    const leaguesWithMatches = leagues?.filter(
      ({ matches }) => {
        if (viewToday) {
          return matches?.some(({ date }) => isSameDay(date, new Date()));
        }

        return matches?.length;
      },
    );

    if (!leaguesWithMatches?.length) {
      return [];
    }

    return leaguesWithMatches.map((league) => {
      if (viewToday) {
        return {
          ...league,
          matches: league.matches.filter(({ date }) =>
            isSameDay(date, new Date()),
          ),
        };
      }

      return league;
    });
  }, [leagues, viewToday]);

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
        <header className="flex items-center gap-4 w-full">
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
        </header>
        {filteredLeagues?.length ? (
          <>
            <ul className="menu menu-horizontal rounded-box bg-base-200">
              <li className={viewToday ? ACTIVE_CLASS : ""}>
                <a onClick={() => setViewToday(true)}>Hoy</a>
              </li>
              <li className={viewToday ? "" : ACTIVE_CLASS}>
                <a onClick={() => setViewToday(false)}>Una semana</a>
              </li>
            </ul>
            <ul className="flex w-full max-w-lg flex-1 flex-col gap-4 ">
              {filteredLeagues?.map(({ id, logo, name, matches }) => (
                <div key={id} className="card w-full bg-base-100 p-4 shadow-xl">
                  <div className="flex gap-4">
                    <img
                      src={logo}
                      alt={`Logo de la liga ${name}`}
                      style={{
                        height: 40,
                        width: "auto",
                      }}
                    />
                    <h2 className="card-title flex-1 text-lg">{name}</h2>
                  </div>
                  <div className="divider m-0" />
                  <ul className="flex flex-col gap-4">
                    {matches?.map(
                      ({ id, date, venue, homeTeam, awayTeam }, i) => (
                        <>
                          <li
                            key={id}
                            className="flex w-full flex-col gap-4 p-4"
                          >
                            <div className="flex w-full gap-2">
                              <p className="text-gray-300">{venue} - </p>
                              <p className="text-gray-300">
                                {!viewToday &&
                                  format(date, "eeee", { locale: es })}
                                <b> {format(date, "HH:mm")}hs</b>
                              </p>
                            </div>
                            <Team {...homeTeam} />
                            <Team {...awayTeam} />
                          </li>
                          {i < matches.length - 1 && (
                            <div className="divider m-0" />
                          )}
                        </>
                      ),
                    )}
                  </ul>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-1 items-center">
            <p className="text-center text-gray-500">No hay partidos :(</p>
          </div>
        )}
      </div>
    </>
  );
}
