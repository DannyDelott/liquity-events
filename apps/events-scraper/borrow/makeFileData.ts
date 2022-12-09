import { LUSDBorrowingFeePaidEventData } from "./scrapeEvents";

export interface LUSDBorowingFeePaidFileData {
  eventName: "LUSDBorrowingFeePaid";
  events: LUSDBorrowingFeePaidEventData[];
}
export function makeLUSDBorrowingFeePaidFileData(
  eventData: LUSDBorrowingFeePaidEventData[]
): LUSDBorowingFeePaidFileData {
  return { eventName: "LUSDBorrowingFeePaid", events: eventData };
}
