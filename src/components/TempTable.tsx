import { type FC } from "react";

const scoreCn = "text-sm font-semibold"

export const TeamTeam: FC<{
  goals: number;
  logo: string;
  isHome?: boolean;
  name?: string;
  iconClassName?: string;
  scoreClassName?: string;
}> = ({ goals, logo, isHome, name, iconClassName, scoreClassName }) => {
  return (
    <>
      {!isHome && <p className={scoreClassName ?? scoreCn}>{goals}</p>}
      <div
        className={`flex items-center gap-1 ${isHome ? "flex-row-reverse" : "flex-row"}`}
        style={{
          width: "50%",
        }}
      >
        <div className="avatar">
          <div className={iconClassName ?? 'w-6'}>
            <img src={logo || ""} alt={name} />
          </div>
        </div>
      </div>
      {isHome && <p className={scoreClassName ?? scoreCn}>{goals}</p>}
    </>
  );
};

export const TempTable = ({ table }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="text-left">Equipo</th>
          <th className="text-center">Puntos</th>
          <th className="text-right">DIF</th>
        </tr>
      </thead>
      <tbody>
        {table.map(({ id, rank, name, logo, points, goalsDiff }) => {
          const clasif = rank <= 4;
          return (
            <tr key={id} className={clasif ? '' : 'opacity-75'}>
              <td className="flex h-10 items-center gap-4">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded text-xs font-bold text-white ${
                    clasif ? "bg-green-600" : ""
                  }`}
                >
                  #{rank}
                </span>
                <img
                  src={logo}
                  alt={`Logo de ${name}`}
                  style={{
                    height: 20,
                    width: "auto",
                  }}
                />
                {name}
              </td>
              <td className="text-center">{points}</td>
              <td className="text-right">
                {goalsDiff > 0 ? `+${goalsDiff}` : goalsDiff}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
