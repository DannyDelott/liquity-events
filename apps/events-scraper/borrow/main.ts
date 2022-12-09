import { Alchemy, Network } from "alchemy-sdk";
import { writeFile } from "../base/writeFile";
import { scrapeLUSDBorrowingFeePaidEvents } from "./scrapeEvents";
import { makeLUSDBorrowingFeePaidFileData } from "./makeFileData";

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_MAINNET_API_KEY as string,
  network: Network.ETH_MAINNET,
  batchRequests: true,
});

const LUSD_BORROWING_FEE_PAID_OUTPUT_FILE = "LUSDBorrowingFeePaid.json";
(async () => {
  const provider = await alchemy.config.getProvider();
  const lusdBorrowingFeePaidEvents = await scrapeLUSDBorrowingFeePaidEvents(
    provider
  );
  writeFile(
    LUSD_BORROWING_FEE_PAID_OUTPUT_FILE,
    makeLUSDBorrowingFeePaidFileData(lusdBorrowingFeePaidEvents)
  );
  // TODO: Push the file up to S3!
})();
