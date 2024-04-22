import { type MatchEventsResponse } from "@/types/matchEvents";

export const MATCH_BYID_RESPONSE: MatchEventsResponse[] = [
  {
    fixture: {
      id: 1196706,
      referee: "Yael Falcon Perez, Argentina",
      timezone: "UTC",
      date: "2024-04-21T18:30:00+00:00",
      timestamp: 1713724200,
      periods: {
        first: 1713724200,
        second: 1713727800,
      },
      venue: {
        id: 19570,
        name: "Estadio Mâs Monumental",
        city: "Capital Federal, Ciudad de Buenos Aires",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 1032,
      name: "Copa de la Liga Profesional",
      country: "Argentina",
      logo: "https://media.api-sports.io/football/leagues/1032.png",
      flag: "https://media.api-sports.io/flags/ar.svg",
      season: 2024,
      round: "1st Phase - Quarter-finals",
    },
    teams: {
      home: {
        id: 435,
        name: "River Plate",
        logo: "https://media.api-sports.io/football/teams/435.png",
        winner: false,
      },
      away: {
        id: 451,
        name: "Boca Juniors",
        logo: "https://media.api-sports.io/football/teams/451.png",
        winner: true,
      },
    },
    goals: {
      home: 2,
      away: 3,
    },
    score: {
      halftime: {
        home: 1,
        away: 1,
      },
      fulltime: {
        home: 2,
        away: 3,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
    events: [
      {
        time: {
          elapsed: 10,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 9933,
          name: "Miguel Borja",
        },
        assist: {
          id: 414385,
          name: "Claudio Echeverri",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 40,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 414385,
          name: "Claudio Echeverri",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: null,
      },
      {
        time: {
          elapsed: 44,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 6327,
          name: "Miguel Merentiel",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 45,
          extra: 1,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 5997,
          name: "Nacho Fernández",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Handball",
      },
      {
        time: {
          elapsed: 45,
          extra: 1,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 6327,
          name: "Miguel Merentiel",
        },
        assist: {
          id: 2419,
          name: "Luis Advíncula",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 48,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 9933,
          name: "Miguel Borja",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Argument",
      },
      {
        time: {
          elapsed: 48,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 890,
          name: "Marcos Rojo",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Argument",
      },
      {
        time: {
          elapsed: 55,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 6602,
          name: "Marcelo Herrera",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Var",
        detail: "Goal cancelled",
        comments: null,
      },
      {
        time: {
          elapsed: 60,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 5997,
          name: "Nacho Fernández",
        },
        assist: {
          id: 2473,
          name: "Manuel Lanzini",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 60,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 414385,
          name: "Claudio Echeverri",
        },
        assist: {
          id: 50880,
          name: "Esequiel Barco",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 62,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 274,
          name: "Edinson Cavani",
        },
        assist: {
          id: 288707,
          name: "Kevin Zenón",
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 64,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 392734,
          name: "Jabes Saralegui",
        },
        assist: {
          id: 6082,
          name: "Nicolás Figal",
        },
        type: "subst",
        detail: "Substitution 1",
        comments: null,
      },
      {
        time: {
          elapsed: 67,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 6327,
          name: "Miguel Merentiel",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 274,
          name: "Edinson Cavani",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 70,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 6028,
          name: "Rodrigo Aliendro",
        },
        assist: {
          id: 194906,
          name: "Pablo Solari",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 73,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 214,
          name: "Facundo Colidio",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 73,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 274,
          name: "Edinson Cavani",
        },
        assist: {
          id: 2478,
          name: "Darío Benedetto",
        },
        type: "subst",
        detail: "Substitution 2",
        comments: null,
      },
      {
        time: {
          elapsed: 76,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 289444,
          name: "Lautaro Blanco",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 79,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 6519,
          name: "Rodrigo Villagra",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 80,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 6519,
          name: "Rodrigo Villagra",
        },
        assist: {
          id: 30690,
          name: "Nicolas Fonseca",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 80,
          extra: null,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 6602,
          name: "Marcelo Herrera",
        },
        assist: {
          id: 237143,
          name: "Santiago Simón",
        },
        type: "subst",
        detail: "Substitution 5",
        comments: null,
      },
      {
        time: {
          elapsed: 86,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 5916,
          name: "Pol Fernández",
        },
        assist: {
          id: 5972,
          name: "Jorman Campuzano",
        },
        type: "subst",
        detail: "Substitution 3",
        comments: null,
      },
      {
        time: {
          elapsed: 86,
          extra: null,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 6327,
          name: "Miguel Merentiel",
        },
        assist: {
          id: 363393,
          name: "Luca Langoni",
        },
        type: "subst",
        detail: "Substitution 4",
        comments: null,
      },
      {
        time: {
          elapsed: 90,
          extra: 6,
        },
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        player: {
          id: 6082,
          name: "Nicolás Figal",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul",
      },
      {
        time: {
          elapsed: 90,
          extra: 3,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 194906,
          name: "Pablo Solari",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Card",
        detail: "Yellow Card",
        comments: "Argument",
      },
      {
        time: {
          elapsed: 90,
          extra: 7,
        },
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        player: {
          id: 2550,
          name: "Paulo Díaz",
        },
        assist: {
          id: null,
          name: null,
        },
        type: "Goal",
        detail: "Normal Goal",
        comments: null,
      },
    ],
    lineups: [
      {
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
          colors: null,
        },
        formation: "4-3-1-2",
        startXI: [
          {
            player: {
              id: 2463,
              name: "Franco Armani",
              number: 1,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 6602,
              name: "Marcelo Herrera",
              number: 15,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 50875,
              name: "Leandro González Pírez",
              number: 14,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 2550,
              name: "Paulo Díaz",
              number: 17,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 6237,
              name: "Enzo Díaz",
              number: 13,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 5997,
              name: "Nacho Fernández",
              number: 26,
              pos: "M",
              grid: "3:3",
            },
          },
          {
            player: {
              id: 6519,
              name: "Rodrigo Villagra",
              number: 23,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 6028,
              name: "Rodrigo Aliendro",
              number: 29,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 414385,
              name: "Claudio Echeverri",
              number: 19,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 9933,
              name: "Miguel Borja",
              number: 9,
              pos: "F",
              grid: "5:2",
            },
          },
          {
            player: {
              id: 214,
              name: "Facundo Colidio",
              number: 11,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 2473,
              name: "Manuel Lanzini",
              number: 10,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 50880,
              name: "Esequiel Barco",
              number: 21,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 194906,
              name: "Pablo Solari",
              number: 36,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 237143,
              name: "Santiago Simón",
              number: 31,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 30690,
              name: "Nicolas Fonseca",
              number: 4,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 5985,
              name: "Ezequiel Centurión",
              number: 33,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 413144,
              name: "Daniel Zabala",
              number: 22,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 316516,
              name: "Sebastián Boselli",
              number: 2,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 5988,
              name: "Milton Casco",
              number: 20,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 1211,
              name: "Matías Kranevitter",
              number: 5,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 449249,
              name: "Franco Mastantuono",
              number: 30,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 13402,
              name: "Agustín Palavecino",
              number: 8,
              pos: "M",
              grid: null,
            },
          },
        ],
        coach: {
          id: 5345,
          name: "M. Demichelis",
          photo: "https://media.api-sports.io/football/coachs/5345.png",
        },
      },
      {
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
          colors: null,
        },
        formation: "4-3-1-2",
        startXI: [
          {
            player: {
              id: 884,
              name: "Sergio Romero",
              number: 1,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 2419,
              name: "Luis Advíncula",
              number: 17,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 51599,
              name: "Cristian Lema",
              number: 2,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 890,
              name: "Marcos Rojo",
              number: 6,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 289444,
              name: "Lautaro Blanco",
              number: 23,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 392734,
              name: "Jabes Saralegui",
              number: 47,
              pos: "M",
              grid: "3:3",
            },
          },
          {
            player: {
              id: 237087,
              name: "Ezequiel Fernández",
              number: 21,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 5916,
              name: "Pol Fernández",
              number: 8,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 288707,
              name: "Kevin Zenón",
              number: 22,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 274,
              name: "Edinson Cavani",
              number: 10,
              pos: "F",
              grid: "5:2",
            },
          },
          {
            player: {
              id: 6327,
              name: "Miguel Merentiel",
              number: 16,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 6082,
              name: "Nicolás Figal",
              number: 4,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 2478,
              name: "Darío Benedetto",
              number: 9,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 5972,
              name: "Jorman Campuzano",
              number: 49,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 363393,
              name: "Luca Langoni",
              number: 14,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 177230,
              name: "Leandro Brey",
              number: 12,
              pos: "G",
              grid: null,
            },
          },
          {
            player: {
              id: 5963,
              name: "Frank Fabra",
              number: 18,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 369412,
              name: "Lautaro Di Lollo",
              number: 40,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 1160,
              name: "Marcelo Saracchi",
              number: 3,
              pos: "D",
              grid: null,
            },
          },
          {
            player: {
              id: 6324,
              name: "Ezequiel Bullaude",
              number: 5,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 459876,
              name: "Milton Delgado",
              number: 43,
              pos: "M",
              grid: null,
            },
          },
          {
            player: {
              id: 6189,
              name: "Norberto Briasco",
              number: 29,
              pos: "F",
              grid: null,
            },
          },
          {
            player: {
              id: 323785,
              name: "Vicente Taborda",
              number: 39,
              pos: "M",
              grid: null,
            },
          },
        ],
        coach: {
          id: 249,
          name: "D. Martínez",
          photo: "https://media.api-sports.io/football/coachs/249.png",
        },
      },
    ],
    statistics: [
      {
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 7,
          },
          {
            type: "Shots off Goal",
            value: 4,
          },
          {
            type: "Total Shots",
            value: 13,
          },
          {
            type: "Blocked Shots",
            value: 2,
          },
          {
            type: "Shots insidebox",
            value: 7,
          },
          {
            type: "Shots outsidebox",
            value: 6,
          },
          {
            type: "Fouls",
            value: 12,
          },
          {
            type: "Corner Kicks",
            value: 4,
          },
          {
            type: "Offsides",
            value: 0,
          },
          {
            type: "Ball Possession",
            value: "52%",
          },
          {
            type: "Yellow Cards",
            value: 6,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 2,
          },
          {
            type: "Total passes",
            value: 334,
          },
          {
            type: "Passes accurate",
            value: 262,
          },
          {
            type: "Passes %",
            value: "78%",
          },
          {
            type: "expected_goals",
            value: null,
          },
        ],
      },
      {
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
        },
        statistics: [
          {
            type: "Shots on Goal",
            value: 5,
          },
          {
            type: "Shots off Goal",
            value: 6,
          },
          {
            type: "Total Shots",
            value: 12,
          },
          {
            type: "Blocked Shots",
            value: 1,
          },
          {
            type: "Shots insidebox",
            value: 7,
          },
          {
            type: "Shots outsidebox",
            value: 5,
          },
          {
            type: "Fouls",
            value: 15,
          },
          {
            type: "Corner Kicks",
            value: 4,
          },
          {
            type: "Offsides",
            value: 2,
          },
          {
            type: "Ball Possession",
            value: "48%",
          },
          {
            type: "Yellow Cards",
            value: 5,
          },
          {
            type: "Red Cards",
            value: null,
          },
          {
            type: "Goalkeeper Saves",
            value: 5,
          },
          {
            type: "Total passes",
            value: 314,
          },
          {
            type: "Passes accurate",
            value: 254,
          },
          {
            type: "Passes %",
            value: "81%",
          },
          {
            type: "expected_goals",
            value: null,
          },
        ],
      },
    ],
    players: [
      {
        team: {
          id: 435,
          name: "River Plate",
          logo: "https://media.api-sports.io/football/teams/435.png",
          update: "2024-04-22T00:30:53+00:00",
        },
        players: [
          {
            player: {
              id: 2463,
              name: "Franco Armani",
              photo: "https://media.api-sports.io/football/players/2463.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 1,
                  position: "G",
                  rating: "6.6",
                  captain: true,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 3,
                  assists: null,
                  saves: 2,
                },
                passes: {
                  total: 17,
                  key: null,
                  accuracy: "15",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: 0,
                },
              },
            ],
          },
          {
            player: {
              id: 6602,
              name: "Marcelo Herrera",
              photo: "https://media.api-sports.io/football/players/6602.png",
            },
            statistics: [
              {
                games: {
                  minutes: 80,
                  number: 15,
                  position: "D",
                  rating: "6.5",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 27,
                  key: null,
                  accuracy: "14",
                },
                tackles: {
                  total: 2,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 6,
                  won: 3,
                },
                dribbles: {
                  attempts: 2,
                  success: 1,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 50875,
              name: "Leandro González Pírez",
              photo: "https://media.api-sports.io/football/players/50875.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 14,
                  position: "D",
                  rating: "6.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 31,
                  key: null,
                  accuracy: "25",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 7,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 2,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2550,
              name: "Paulo Díaz",
              photo: "https://media.api-sports.io/football/players/2550.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 17,
                  position: "D",
                  rating: "8.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 3,
                  on: 3,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 46,
                  key: 2,
                  accuracy: "40",
                },
                tackles: {
                  total: null,
                  blocks: 1,
                  interceptions: 3,
                },
                duels: {
                  total: 6,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6237,
              name: "Enzo Díaz",
              photo: "https://media.api-sports.io/football/players/6237.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 13,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 35,
                  key: null,
                  accuracy: "28",
                },
                tackles: {
                  total: 3,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 9,
                  won: 5,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: 2,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5997,
              name: "Nacho Fernández",
              photo: "https://media.api-sports.io/football/players/5997.png",
            },
            statistics: [
              {
                games: {
                  minutes: 60,
                  number: 26,
                  position: "M",
                  rating: "6.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 21,
                  key: 1,
                  accuracy: "14",
                },
                tackles: {
                  total: 2,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 7,
                  won: 3,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: 2,
                },
                fouls: {
                  drawn: null,
                  committed: 2,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6519,
              name: "Rodrigo Villagra",
              photo: "https://media.api-sports.io/football/players/6519.png",
            },
            statistics: [
              {
                games: {
                  minutes: 80,
                  number: 23,
                  position: "M",
                  rating: "6.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 29,
                  key: null,
                  accuracy: "23",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 7,
                  won: 4,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: 2,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6028,
              name: "Rodrigo Aliendro",
              photo: "https://media.api-sports.io/football/players/6028.png",
            },
            statistics: [
              {
                games: {
                  minutes: 70,
                  number: 29,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 28,
                  key: null,
                  accuracy: "24",
                },
                tackles: {
                  total: 5,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 8,
                  won: 6,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 414385,
              name: "Claudio Echeverri",
              photo: "https://media.api-sports.io/football/players/414385.png",
            },
            statistics: [
              {
                games: {
                  minutes: 60,
                  number: 19,
                  position: "M",
                  rating: "7.3",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 13,
                  key: 2,
                  accuracy: "12",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 8,
                  won: 6,
                },
                dribbles: {
                  attempts: 4,
                  success: 4,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: null,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 9933,
              name: "Miguel Borja",
              photo: "https://media.api-sports.io/football/players/9933.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 9,
                  position: "F",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: 1,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 6,
                  key: null,
                  accuracy: "3",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 214,
              name: "Facundo Colidio",
              photo: "https://media.api-sports.io/football/players/214.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 11,
                  position: "F",
                  rating: "6.5",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 16,
                  key: null,
                  accuracy: "9",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 8,
                  won: 1,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 2,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2473,
              name: "Manuel Lanzini",
              photo: "https://media.api-sports.io/football/players/2473.png",
            },
            statistics: [
              {
                games: {
                  minutes: 38,
                  number: 10,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 30,
                  key: 1,
                  accuracy: "25",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 3,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 50880,
              name: "Esequiel Barco",
              photo: "https://media.api-sports.io/football/players/50880.png",
            },
            statistics: [
              {
                games: {
                  minutes: 38,
                  number: 21,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 23,
                  key: 1,
                  accuracy: "20",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 2,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 194906,
              name: "Pablo Solari",
              photo: "https://media.api-sports.io/football/players/194906.png",
            },
            statistics: [
              {
                games: {
                  minutes: 28,
                  number: 36,
                  position: "F",
                  rating: "6.6",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 1,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 3,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: null,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 237143,
              name: "Santiago Simón",
              photo: "https://media.api-sports.io/football/players/237143.png",
            },
            statistics: [
              {
                games: {
                  minutes: 18,
                  number: 31,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 3,
                  key: null,
                  accuracy: "3",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 30690,
              name: "Nicolas Fonseca",
              photo: "https://media.api-sports.io/football/players/30690.png",
            },
            statistics: [
              {
                games: {
                  minutes: 18,
                  number: 4,
                  position: "M",
                  rating: "6.7",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 8,
                  key: null,
                  accuracy: "7",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5985,
              name: "Ezequiel Centurión",
              photo: "https://media.api-sports.io/football/players/5985.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 33,
                  position: "G",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 413144,
              name: "Daniel Zabala",
              photo: "https://media.api-sports.io/football/players/413144.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 22,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 316516,
              name: "Sebastián Boselli",
              photo: "https://media.api-sports.io/football/players/316516.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 2,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5988,
              name: "Milton Casco",
              photo: "https://media.api-sports.io/football/players/5988.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 20,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 1211,
              name: "Matías Kranevitter",
              photo: "https://media.api-sports.io/football/players/1211.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 5,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 449249,
              name: "Franco Mastantuono",
              photo: "https://media.api-sports.io/football/players/449249.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 30,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 13402,
              name: "Agustín Palavecino",
              photo: "https://media.api-sports.io/football/players/13402.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 8,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
        ],
      },
      {
        team: {
          id: 451,
          name: "Boca Juniors",
          logo: "https://media.api-sports.io/football/teams/451.png",
          update: "2024-04-22T00:30:53+00:00",
        },
        players: [
          {
            player: {
              id: 884,
              name: "Sergio Romero",
              photo: "https://media.api-sports.io/football/players/884.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 1,
                  position: "G",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 2,
                  assists: null,
                  saves: 5,
                },
                passes: {
                  total: 17,
                  key: null,
                  accuracy: "10",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: 0,
                },
              },
            ],
          },
          {
            player: {
              id: 2419,
              name: "Luis Advíncula",
              photo: "https://media.api-sports.io/football/players/2419.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 17,
                  position: "D",
                  rating: "6.6",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 29,
                  key: 1,
                  accuracy: "21",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 14,
                  won: 6,
                },
                dribbles: {
                  attempts: 6,
                  success: 3,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 51599,
              name: "Cristian Lema",
              photo: "https://media.api-sports.io/football/players/51599.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 2,
                  position: "D",
                  rating: "6.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: 1,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 31,
                  key: null,
                  accuracy: "27",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 7,
                  won: 4,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 890,
              name: "Marcos Rojo",
              photo: "https://media.api-sports.io/football/players/890.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 6,
                  position: "D",
                  rating: "6.3",
                  captain: true,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 36,
                  key: null,
                  accuracy: "27",
                },
                tackles: {
                  total: null,
                  blocks: 1,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 3,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 289444,
              name: "Lautaro Blanco",
              photo: "https://media.api-sports.io/football/players/289444.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 23,
                  position: "D",
                  rating: "6.7",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 46,
                  key: 1,
                  accuracy: "35",
                },
                tackles: {
                  total: 2,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 6,
                  won: 3,
                },
                dribbles: {
                  attempts: 2,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 2,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 392734,
              name: "Jabes Saralegui",
              photo: "https://media.api-sports.io/football/players/392734.png",
            },
            statistics: [
              {
                games: {
                  minutes: 64,
                  number: 47,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 20,
                  key: null,
                  accuracy: "19",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 2,
                  won: 1,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: 1,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 237087,
              name: "Ezequiel Fernández",
              photo: "https://media.api-sports.io/football/players/237087.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 21,
                  position: "M",
                  rating: "6.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 37,
                  key: 1,
                  accuracy: "36",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: 1,
                },
                duels: {
                  total: 15,
                  won: 8,
                },
                dribbles: {
                  attempts: 2,
                  success: 1,
                  past: 2,
                },
                fouls: {
                  drawn: 4,
                  committed: 3,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5916,
              name: "Pol Fernández",
              photo: "https://media.api-sports.io/football/players/5916.png",
            },
            statistics: [
              {
                games: {
                  minutes: 86,
                  number: 8,
                  position: "M",
                  rating: "6.3",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 36,
                  key: null,
                  accuracy: "32",
                },
                tackles: {
                  total: null,
                  blocks: 1,
                  interceptions: 2,
                },
                duels: {
                  total: 6,
                  won: 1,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 3,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 288707,
              name: "Kevin Zenón",
              photo: "https://media.api-sports.io/football/players/288707.png",
            },
            statistics: [
              {
                games: {
                  minutes: 98,
                  number: 22,
                  position: "M",
                  rating: "7.7",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: 1,
                  saves: null,
                },
                passes: {
                  total: 28,
                  key: 3,
                  accuracy: "22",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 6,
                  won: 2,
                },
                dribbles: {
                  attempts: 4,
                  success: 1,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 274,
              name: "Edinson Cavani",
              photo: "https://media.api-sports.io/football/players/274.png",
            },
            statistics: [
              {
                games: {
                  minutes: 73,
                  number: 10,
                  position: "F",
                  rating: "7.2",
                  captain: false,
                  substitute: false,
                },
                offsides: 2,
                shots: {
                  total: 4,
                  on: 2,
                },
                goals: {
                  total: 1,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 15,
                  key: null,
                  accuracy: "11",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 7,
                  won: 4,
                },
                dribbles: {
                  attempts: 1,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 2,
                  committed: 1,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6327,
              name: "Miguel Merentiel",
              photo: "https://media.api-sports.io/football/players/6327.png",
            },
            statistics: [
              {
                games: {
                  minutes: 86,
                  number: 16,
                  position: "F",
                  rating: "8.9",
                  captain: false,
                  substitute: false,
                },
                offsides: null,
                shots: {
                  total: 2,
                  on: 2,
                },
                goals: {
                  total: 2,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 11,
                  key: 2,
                  accuracy: "10",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 9,
                  won: 4,
                },
                dribbles: {
                  attempts: 2,
                  success: 2,
                  past: 1,
                },
                fouls: {
                  drawn: 1,
                  committed: null,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6082,
              name: "Nicolás Figal",
              photo: "https://media.api-sports.io/football/players/6082.png",
            },
            statistics: [
              {
                games: {
                  minutes: 34,
                  number: 4,
                  position: "D",
                  rating: "6.2",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 3,
                  key: null,
                  accuracy: "1",
                },
                tackles: {
                  total: 1,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 4,
                  won: 2,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: 1,
                  committed: 2,
                },
                cards: {
                  yellow: 1,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 2478,
              name: "Darío Benedetto",
              photo: "https://media.api-sports.io/football/players/2478.png",
            },
            statistics: [
              {
                games: {
                  minutes: 25,
                  number: 9,
                  position: "F",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: 1,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 2,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5972,
              name: "Jorman Campuzano",
              photo: "https://media.api-sports.io/football/players/5972.png",
            },
            statistics: [
              {
                games: {
                  minutes: 12,
                  number: 49,
                  position: "M",
                  rating: "6.2",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 2,
                  key: null,
                  accuracy: "2",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: 1,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: 1,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 363393,
              name: "Luca Langoni",
              photo: "https://media.api-sports.io/football/players/363393.png",
            },
            statistics: [
              {
                games: {
                  minutes: 12,
                  number: 14,
                  position: "F",
                  rating: "6.3",
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: 1,
                  key: null,
                  accuracy: "1",
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 177230,
              name: "Leandro Brey",
              photo: "https://media.api-sports.io/football/players/177230.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 12,
                  position: "G",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 5963,
              name: "Frank Fabra",
              photo: "https://media.api-sports.io/football/players/5963.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 18,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 369412,
              name: "Lautaro Di Lollo",
              photo: "https://media.api-sports.io/football/players/369412.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 40,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 1160,
              name: "Marcelo Saracchi",
              photo: "https://media.api-sports.io/football/players/1160.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 3,
                  position: "D",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6324,
              name: "Ezequiel Bullaude",
              photo: "https://media.api-sports.io/football/players/6324.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 5,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 459876,
              name: "Milton Delgado",
              photo: "https://media.api-sports.io/football/players/459876.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 43,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 6189,
              name: "Norberto Briasco",
              photo: "https://media.api-sports.io/football/players/6189.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 29,
                  position: "F",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
          {
            player: {
              id: 323785,
              name: "Vicente Taborda",
              photo: "https://media.api-sports.io/football/players/323785.png",
            },
            statistics: [
              {
                games: {
                  minutes: null,
                  number: 39,
                  position: "M",
                  rating: null,
                  captain: false,
                  substitute: true,
                },
                offsides: null,
                shots: {
                  total: null,
                  on: null,
                },
                goals: {
                  total: null,
                  conceded: 0,
                  assists: null,
                  saves: null,
                },
                passes: {
                  total: null,
                  key: null,
                  accuracy: null,
                },
                tackles: {
                  total: null,
                  blocks: null,
                  interceptions: null,
                },
                duels: {
                  total: null,
                  won: null,
                },
                dribbles: {
                  attempts: null,
                  success: null,
                  past: null,
                },
                fouls: {
                  drawn: null,
                  committed: null,
                },
                cards: {
                  yellow: 0,
                  red: 0,
                },
                penalty: {
                  won: null,
                  commited: null,
                  scored: 0,
                  missed: 0,
                  saved: null,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
