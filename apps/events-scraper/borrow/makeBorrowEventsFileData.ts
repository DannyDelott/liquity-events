import { BorrowEventData } from "./borrowEvents";

export interface BorrowEventsFile {
  name: "BorrowEvent";
  events: BorrowEventData[];
}

export function makeBorrowEventsFileData(
  eventData: BorrowEventData[]
): BorrowEventsFile {
  return { name: "BorrowEvent", events: eventData };
}
