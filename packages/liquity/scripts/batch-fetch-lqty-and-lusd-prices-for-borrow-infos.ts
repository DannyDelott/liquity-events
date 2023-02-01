require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import { BorrowInfo } from "src/borrow/borrowInfos";
import {
  BorrowInfosFile,
  makeBorrowInfosFile,
} from "src/borrow/makeBorrowInfosFile";
import { BORROW_INFOS_URL } from "src/borrow/s3";
import {
  fetchBatchHistoricalPrice,
  makeTokenId,
  PriceInfo,
} from "src/defillama";
import { LQTY_TOKEN_ADDRESS } from "src/lqtyToken";
import { LUSD_TOKEN_ADDRESS } from "src/lusdToken";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";
import chunk from "lodash.chunk";
import zip from "lodash.zip";

const BORROW_INFOS_FILE_PATH = "src/borrow/json/borrowInfos.json";

(async () => {
  const borrowInfosJson = await fetchJson<BorrowInfosFile>(BORROW_INFOS_URL);
  const firstTwoBorrowInfos = borrowInfosJson.data.slice(0, 2);
  const updatedFirstTwoBorrowInfos: BorrowInfo[] = firstTwoBorrowInfos.map(
    (borrowInfo) => ({
      block: borrowInfo.block,
      borrower: borrowInfo.borrower,
      lusdFee: borrowInfo.lusdFee,
      timestamp: borrowInfo.timestamp,
      txHash: borrowInfo.txHash,
      totalLqtyStaked: borrowInfo.totalLqtyStaked,
      lusdPrice: "1",
      lqtyPrice: "0",
    })
  );

  const updatedBorrowInfos: BorrowInfo[] = [...updatedFirstTwoBorrowInfos];

  const remainingBorrowInfos = borrowInfosJson.data.slice(2);
  const chunkedBorrowInfos = chunk(remainingBorrowInfos, 100);
  let counter = 1;
  for (const borrowInfoChunk of chunkedBorrowInfos) {
    console.log(`Chunk ${counter} of ${chunkedBorrowInfos.length}`);

    const lusdTokenId = makeTokenId(LUSD_TOKEN_ADDRESS);
    const lqtyTokenId = makeTokenId(LQTY_TOKEN_ADDRESS);
    const timestamps = borrowInfoChunk.map(({ timestamp }) => timestamp);
    const batchResults = await fetchBatchHistoricalPrice(
      [LUSD_TOKEN_ADDRESS, LQTY_TOKEN_ADDRESS],
      timestamps
    );

    const lusdPrices = batchResults[lusdTokenId].prices;
    const lqtyPrices = batchResults[lqtyTokenId].prices;
    if (
      lusdPrices.length !== lqtyPrices.length ||
      lqtyPrices.length !== borrowInfoChunk.length
    ) {
      console.log(
        "did not get the same number of prices back for lqty and lusd"
      );
      return;
    }

    const zipped = zip(borrowInfoChunk, lusdPrices, lqtyPrices) as unknown as [
      BorrowInfo,
      PriceInfo,
      PriceInfo
    ][];

    const newBorrowInfos: BorrowInfo[] = zipped.map(
      ([borrowInfo, lusdPriceInfo, lqtyPriceInfo]) => {
        return {
          block: borrowInfo.block,
          borrower: borrowInfo.borrower,
          lusdFee: borrowInfo.lusdFee,
          timestamp: borrowInfo.timestamp,
          txHash: borrowInfo.txHash,
          totalLqtyStaked: borrowInfo.totalLqtyStaked,
          lusdPrice: `${lusdPriceInfo?.price || "1"}`,
          lqtyPrice: `${lqtyPriceInfo?.price || "0"}`,
        };
      }
    );

    updatedBorrowInfos.push(...newBorrowInfos);

    // write a local file
    const json = makeBorrowInfosFile(updatedBorrowInfos);
    writeFile(BORROW_INFOS_FILE_PATH, json);
    counter++;
  }

  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "borrowInfos.json",
    fileData: makeBorrowInfosFile(updatedBorrowInfos),
  });

  console.log("Successfully uploaded object!", data);
})();
