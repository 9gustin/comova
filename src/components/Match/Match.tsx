import { format } from "date-fns";

const Team = ({ goals, logo, name, isHome }: any) => (
  <>
    {!isHome && <p className="text-lg">{goals}</p>}
    <div
      className={`flex items-center gap-2 ${isHome ? "flex-row-reverse" : "flex-row"}`}
      style={{
        width: "50%",
      }}
    >
      <div className="avatar">
        <div className="w-8 rounded">
          <img src={logo || ""} alt={name} />
        </div>
      </div>
      <p className={`font text-sm ${isHome ? "text-right" : "text-left"}`}>
        {name}
      </p>
    </div>
    {isHome && <p className="text-lg">{goals}</p>}
  </>
);

export const Match = ({ id, date, homeTeam, awayTeam }: any) => {
  return (
    <li className="flex flex-col gap-2 justify-center items-center">
      <p className="font-semibold text-md">{format(new Date(date), "HH:mm")}hs</p>
      <div key={id} className="flex w-full items-center gap-2">
        <Team {...homeTeam} isHome />
        <span className="text-2xl">-</span>
        <Team {...awayTeam} />
      </div>
    </li>
  );
};
