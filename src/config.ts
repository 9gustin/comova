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

const CHAMPIONSLEAGUE = {
  id: 2,
  currentSeason: 2023,
  name: "UEFA Champions League",
  logo: "https://media.api-sports.io/football/leagues/2.png",
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
  currentSeason: 2023,
  name: "Premier League",
  logo: "https://media.api-sports.io/football/leagues/39.png",
};

export const ACTIVE_LEAGUES = [
  COPADELALIGA_ARG,
  LIBERTADORES,
  PREMIERLEAGUE,
  CHAMPIONSLEAGUE,
  COPASUDAMERICANA,
];
