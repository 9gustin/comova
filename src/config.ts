export const DEFAULT_TIMEZONE = "America/Argentina/Buenos_Aires";

export type League = {
  id: number;
  currentSeason: number;
  name: string;
  logo: string;
};

export const COPADELALIGA_ARG = {
  id: 1032,
  currentSeason: 2024,
  name: "Copa de la Liga Profesional",
  logo: "https://media.api-sports.io/football/leagues/1032.png",
};

export const LIGAARGENTINA = {
  id: 128,
  currentSeason: 2024,
  name: "Liga Profesional Argentina",
  logo: "https://media.api-sports.io/football/leagues/128.png",
}

export const PRIMERABNACIONAL = {
  id: 129	,
  currentSeason: 2024,
  name: "Primera Nacional",
  logo: "https://media.api-sports.io/football/leagues/129.png",
}

const CHAMPIONSLEAGUE = {
  id: 2,
  currentSeason: 2024,
  name: "UEFA Champions League",
  logo: "https://media.api-sports.io/football/leagues/2.png",
};

const EUROPALEAGUE = {
  id: 3,
  currentSeason: 2024,
  name: "UEFA Europa League",
  logo: "https://media.api-sports.io/football/leagues/3.png",
};

const LIBERTADORES = {
  id: 13,
  currentSeason: 2024,
  name: "CONMEBOL Libertadores",
  logo: "https://media.api-sports.io/football/leagues/13.png",
};

const COPASUDAMERICANA = {
  id: 11,
  currentSeason: 2024,
  name: "CONMEBOL Sudamericana",
  logo: "https://media.api-sports.io/football/leagues/11.png",
};

const PREMIERLEAGUE = {
  id: 39,
  currentSeason: 2024,
  name: "Premier League",
  logo: "https://media.api-sports.io/football/leagues/39.png",
};

export const ACTIVE_LEAGUES = [
  LIGAARGENTINA,
  PRIMERABNACIONAL,
  LIBERTADORES,
  PREMIERLEAGUE,
  CHAMPIONSLEAGUE,
  COPASUDAMERICANA,
  EUROPALEAGUE,
];
