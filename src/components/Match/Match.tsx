import { MatchStatus } from "@/types/matchStatus";
import { format } from "date-fns";
import Link from "next/link";
import { type FC } from "react";

export const Team: FC<{
  goals: number;
  logo: string;
  name: string;
  isHome?: boolean;
  teamCn?: string;
}> = ({ goals, logo, name, isHome, teamCn }) => (
  <>
    {!isHome && <p className="text-lg">{goals}</p>}
    <div
      className={`flex flex-1 items-center gap-2 ${isHome ? "flex-row-reverse" : "flex-row"}`}
      style={{
        width: "50%",
      }}
    >
      <div className="avatar">
        <div className="w-8 rounded">
          <img src={logo || ""} alt={name} />
        </div>
      </div>
      <p
        className={`font text-sm ${isHome ? "text-right" : "text-left"} ${teamCn ?? ""}`}
      >
        {name}
      </p>
    </div>
    {isHome && <p className="text-lg">{goals}</p>}
  </>
);

export const RenderMatchStatus: FC<{ status: MatchStatus; date: Date }> = ({
  date,
  status,
}) => {
  return (
    <>
      {status === MatchStatus.NotStarted && (
        <p className="text-md font-semibold">
          {format(new Date(date), "HH:mm")}hs
        </p>
      )}
      {status === MatchStatus.Live && (
        <p className="text-md font-semibold text-green-400">Ahora</p>
      )}
      {status === MatchStatus.Finished && (
        <p className="text-md font-semibold text-gray-500">Terminado</p>
      )}
    </>
  );
};

export const Match = ({ id, date, homeTeam, awayTeam, status }: any) => {
  return (
    <Link
      className="flex flex-col items-center justify-center gap-2"
      href={`/partido/${id}`}
    >
      <RenderMatchStatus date={date} status={status} />

      <div key={id} className="flex w-full items-center gap-2">
        <Team {...homeTeam} isHome />
        <span className="text-2xl">-</span>
        <Team {...awayTeam} />
      </div>
    </Link>
  );
};
