export type Lineup = {
  team: {
    id: number;
    name: string;
    logo: string;
    colors: {
      player: {
        primary: string;
        number: string;
        border: string;
      };
      goalkeeper: {
        primary: string;
        number: string;
        border: string;
      };
    };
  };
  coach: {
    id: number;
    name: string;
    photo: string;
  };
  formation: string;
  startXI: {
    player: {
      id: number;
      name: string;
      number: number;
      pos: string;
      grid: string | null;
    };
  }[];
  substitutes: {
    player: {
      id: number;
      name: string;
      number: number;
      pos: string;
      grid: string | null;
    };
  }[];
}

export type MatchEventsResponse = {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
  events: {
    time: {
      elapsed: number;
      extra: number | null;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    player: {
      id: number;
      name: string;
    };
    assist: {
      id: number | null;
      name: string | null;
    };
    type: string;
    detail: string;
    comments: string | null;
  }[];
  lineups: Lineup[];
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: {
      type: string;
      value: string | number | null;
    }[];
  }[];
  players: {
    team: {
      id: number;
      name: string;
      logo: string;
      update: string;
    };
    players: {
      player: {
        id: number;
        name: string;
        photo: string;
      };
      statistics: {
        games: {
          minutes: number | null;
          number: number;
          position: string;
          rating: string | null;
          captain: boolean;
          substitute: boolean;
        };
        offsides: number | null;
        shots: {
          total: number | null;
          on: number | null;
        };
        goals: {
          total: number | null;
          conceded: number | null;
          assists: number | null;
          saves: number | null;
        };
        passes: {
          total: number | null;
          key: number | null;
          accuracy: string | null;
        };
        tackles: {
          total: number | null;
          blocks: number | null;
          interceptions: number | null;
        };
        duels: {
          total: number | null;
          won: number | null;
        };
        dribbles: {
          attempts: number | null;
          success: number | null;
          past: number | null;
        };
        fouls: {
          drawn: number | null;
          committed: number | null;
        };
        cards: {
          yellow: number;
          red: number;
        };
        penalty: {
          won: number | null;
          commited: number | null;
          scored: number;
          missed: number;
          saved: number | null;
        };
      }[];
    }[];
  }[];
}