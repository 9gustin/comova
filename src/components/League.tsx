import { Match } from "@/components/Match/Match";
import { Fragment } from "react";

export const League = ({ id, logo, name, matches }: any) => {
  return (
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
      <ul className="flex flex-col gap-2 py-2">
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
