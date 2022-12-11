require("dotenv").config();

import { fetchJson } from "../base/fetchJson";
import { writeFile } from "../base/writeFile";
import { alchemy } from "../provider/provider";
import { pushToS3 } from "../s3/pushToS3";
import { s3 } from "../s3/s3Client";
import { BORROWER_OPERATIONS_DEPLOYMENT_BLOCK } from "./borrowerOperations";
import { BorrowEventData, scrapeBorrowEvents } from "./borrowEvents";
import {
  BorrowEventsFile,
  makeBorrowEventsFileData as makeBorrowEventsJson,
} from "./makeBorrowEventsFileData";

const LUSD_BORROWING_FEE_PAID_OUTPUT_FILE = "LUSDBorrowingFeePaid.json";
export const BORROW_EVENTS_S3_URL =
  "https://lusd-borrowing-fee-paid-events.s3.amazonaws.com/LUSDBorrowingFeePaid.json";

(async () => {
  const provider = await alchemy.config.getProvider();

  const borrowEventsJson = await fetchJson<BorrowEventsFile>(
    BORROW_EVENTS_S3_URL
  );

  // scrape the latest borrow events, starting where we left off
  const newBorrowEvents = await scrapeBorrowEvents(
    borrowEventsJson.events[borrowEventsJson.events.length - 1].block + 1,
    provider
  );

  const borrowEventData: BorrowEventData[] = [
    ...borrowEventsJson.events,
    ...newBorrowEvents,
  ];

  const json = makeBorrowEventsJson(borrowEventData);

  // write a local file
  writeFile(LUSD_BORROWING_FEE_PAID_OUTPUT_FILE, json);

  // Push the data up to s3
  const data = await pushToS3(s3, json);

  console.log("Successfully uploaded object!", data);
})();
