import { Match } from "@/components/Match/Match";
import Link from "next/link";
import { Fragment } from "react";

export const League = ({ id, logo, name, matches }: any) => {
  return (
    <div key={id} className="card w-full bg-base-100 p-4 shadow-xl gap-4">
      <div className="flex gap-4">
        <img
          src={logo}
          alt={`Logo de la liga ${name}`}
          style={{
            height: 40,
            width: "auto",
          }}
        />
          <h3 className="card-title flex-1 text-lg gap-2 justify-between">
        <Link href={`/leagues/${id}`}>
            {name}
        </Link>
          </h3>
      </div>
      <ul className="flex flex-col gap-2">
        {matches?.map((match, i) => (
          <Fragment key={match.id}>
            <Match {...match} />
            {i < matches.length - 1 && <div className="divider m-0" />}
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
