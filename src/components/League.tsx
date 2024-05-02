import { Match } from "@/components/Match/Match";
import Link from "next/link";
import posthog from "posthog-js";
import { Fragment } from "react";

export const League = ({ id, logo, name, matches, isLoading }: any) => {
  return (
    <div key={id} className="card w-full gap-4 bg-base-100 p-4 shadow-xl">
      <div className="flex gap-4">
        <img
          src={logo}
          alt={`Logo de la liga ${name}`}
          style={{
            height: 40,
            width: "auto",
          }}
        />
        <h3 className="card-title flex-1 justify-between gap-2 text-lg">
          <Link href={`/torneo/${id}`} onClick={() => posthog.capture('OPEN_LEAGUE', {id})}>{name}</Link>
        </h3>
      </div>
      <ul className="flex flex-col gap-2">
        {matches?.map((match, i) => (
          <Fragment key={match.id}>
            <li>
              <Match {...match} />
            </li>
            {i < matches.length - 1 && <div className="divider m-0" />}
          </Fragment>
        ))}
        {isLoading && (
          <>
            <div className="skeleton w-full h-12"></div>
            <div className="skeleton w-full h-12"></div>
            <div className="skeleton w-full h-12"></div>
          </>
        )}
      </ul>
    </div>
  );
};
