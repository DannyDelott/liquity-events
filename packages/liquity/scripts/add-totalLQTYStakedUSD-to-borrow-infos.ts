require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import { BorrowInfo } from "src/borrow/borrowInfos";
import {
  BorrowInfosFile,
  makeBorrowInfosFile,
} from "src/borrow/makeBorrowInfosFile";
import { BORROW_INFOS_URL } from "src/borrow/s3";
import { fetchPrice } from "src/defillama";
import { LQTY_TOKEN_ADDRESS } from "src/lqtyToken";
import { LUSD_TOKEN_ADDRESS } from "src/lusdToken";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";

const BORROW_INFOS_FILE_PATH = "src/borrow/json/borrowInfos.json";

(async () => {
  const borrowInfosJson = await fetchJson<BorrowInfosFile>(BORROW_INFOS_URL);

  const updatedBorrowInfos: BorrowInfo[] = [];
  let counter = 1;
  for (const borrowInfo of borrowInfosJson.data) {
    let lusdPriceResult;
    let lqtyPriceResult;
    try {
      lusdPriceResult = await fetchPrice(
        LUSD_TOKEN_ADDRESS,
        borrowInfo.timestamp
      );
      lqtyPriceResult = await fetchPrice(
        LQTY_TOKEN_ADDRESS,
        borrowInfo.timestamp
      );
    } catch (e) {
      await delay(5000);
      lusdPriceResult = await fetchPrice(
        LUSD_TOKEN_ADDRESS,
        borrowInfo.timestamp
      );
      lqtyPriceResult = await fetchPrice(
        LQTY_TOKEN_ADDRESS,
        borrowInfo.timestamp
      );
    }

    const newBorrowInfo: BorrowInfo = {
      block: borrowInfo.block,
      borrower: borrowInfo.borrower,
      lusdFee: borrowInfo.lusdFee,
      timestamp: borrowInfo.timestamp,
      txHash: borrowInfo.txHash,
      totalLqtyStaked: borrowInfo.totalLqtyStaked,
      lusdPrice: `${lusdPriceResult?.price || "1"}`,
      lqtyPrice: `${lqtyPriceResult?.price || "0"}`,
    };

    updatedBorrowInfos.push(newBorrowInfo);
    console.log(
      `(${counter} of ${borrowInfosJson.data.length}): lqtyPrice = $${lqtyPriceResult?.price}, lusdPrice = ${lusdPriceResult?.price}`
    );

    // write a local file
    const json = makeBorrowInfosFile(updatedBorrowInfos);
    writeFile(BORROW_INFOS_FILE_PATH, json);

    // increment counter
    counter++;
  }

  // Push the data up to s3
  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "borrowInfos.json",
    fileData: makeBorrowInfosFile(updatedBorrowInfos),
  });

  console.log("Successfully uploaded object!", data);
})();

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
