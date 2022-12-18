import { BorrowEventData } from "./borrowEvents";

export interface BorrowEventsFile {
  name: "BorrowEvent";
  events: BorrowEventData[];
}

export function makeBorrowDataFile(
  eventData: BorrowEventData[]
): BorrowEventsFile {
  return { name: "BorrowEvent", events: eventData };
}
