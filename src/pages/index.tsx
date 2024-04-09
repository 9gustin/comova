import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { addDays, format, isSameDay } from "date-fns";
import { useMemo, useState } from "react";

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
      ({ matches }) => matches.length > 0,
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-1 flex-col items-center gap-6 bg-base-300 p-4"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold">Como va?</h1>
          <Link href="https://9gu.dev" className="text-gray-300 underline">
            by @9gustin ;)
          </Link>
        </div>
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
                  <ul className="flex flex-col gap-4">
                    {matches?.map(({ id }) => <div key={id}>{id}</div>)}
                  </ul>
                </div>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex-1 flex items-center">
            <p className="text-center text-gray-500">No hay partidos :(</p>
          </div>
        )}
      </div>
    </>
  );
}
