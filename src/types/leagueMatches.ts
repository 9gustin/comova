export type LeagueMatchsResponse = {
  response: Array<{
    fixture: {
      id: number;
      date: string;
      venue: {
        name: string;
      };
      status: {
        elapsed: number;
      };
    };
    league: {
      id: number;
      name: string;
      logo: string;
    };
    teams: {
      home: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
      away: {
        id: number;
        name: string;
        logo: string;
        winner: boolean;
      };
    };
    goals: {
      home: number;
      away: number;
    };
  }>;
};