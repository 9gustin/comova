export enum MatchStatus {
  Finished = "FINISHED",
  Live = "LIVE",
  NotStarted = "NOT_STARTED",
}

export const mapMatchStatus = (status: string): MatchStatus => {
  switch (status) {
    case "FT":
      return MatchStatus.Finished;
    case "NS":
      return MatchStatus.NotStarted;
    default:
      return MatchStatus.Live;
  }
}