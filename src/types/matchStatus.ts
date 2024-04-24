export enum MatchStatus {
  Finished = "FINISHED",
  Live = "LIVE",
  NotStarted = "NOT_STARTED",
  HalfTime = "HALF_TIME",
}

export const mapMatchStatus = (status: string): MatchStatus => {
  switch (status) {
    case "FT":
      return MatchStatus.Finished;
    case "NS":
      return MatchStatus.NotStarted;
    case "HT":
      return MatchStatus.HalfTime;
    default:
      return MatchStatus.Live;
  }
}

export const isLiveStatus = (s: MatchStatus) => s === MatchStatus.Live || s === MatchStatus.HalfTime;
export const showStatusFirst = (s: MatchStatus) => isLiveStatus(s) || s === MatchStatus.NotStarted;
