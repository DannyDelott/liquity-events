require("dotenv").config();

import { S3Client } from "@aws-sdk/client-s3";
import { Alchemy, Network } from "alchemy-sdk";

import { writeFile } from "../base/writeFile";
import { pushToS3 } from "../base/pushToS3";
import { makeLUSDBorrowingFeePaidFileData } from "./makeFileData";
import { scrapeLUSDBorrowingFeePaidEvents } from "./scrapeEvents";

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_MAINNET_API_KEY as string,
  network: Network.ETH_MAINNET,
  batchRequests: true,
});

const s3 = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const LUSD_BORROWING_FEE_PAID_OUTPUT_FILE = "LUSDBorrowingFeePaid.json";

(async () => {
  const provider = await alchemy.config.getProvider();
  const lusdBorrowingFeePaidEvents = await scrapeLUSDBorrowingFeePaidEvents(
    provider
  );

  const fileData = makeLUSDBorrowingFeePaidFileData(lusdBorrowingFeePaidEvents);

  // write a local file
  writeFile(LUSD_BORROWING_FEE_PAID_OUTPUT_FILE, fileData);

  // Push the data up to s3
  const data = await pushToS3(s3, fileData);
  console.log("Successfully uploaded object!", data);
})();
