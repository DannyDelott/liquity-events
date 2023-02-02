require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import {
  fetchBatchHistoricalPrice,
  makeTokenId,
  PriceInfo,
} from "src/defillama";
import { LQTY_TOKEN_ADDRESS } from "src/lqtyToken";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";
import chunk from "lodash.chunk";
import zip from "lodash.zip";
import {
  makeRedemptionInfosFile,
  RedemptionInfosFile,
} from "src/redeem/makeRedemptionInfosFile";
import { REDEMPTION_INFOS_URL } from "src/redeem/s3";
import { RedemptionInfo } from "src/redeem/redemptionInfos";

const REDEMPTION_INFOS_FILE_PATH = "src/redeem/json/redemptionInfos.json";

(async () => {
  const redemptionInfosJson = await fetchJson<RedemptionInfosFile>(
    REDEMPTION_INFOS_URL
  );

  const updatedRedemptionInfos: RedemptionInfo[] = [];

  const chunkedRedemptionInfos = chunk(redemptionInfosJson.data, 100);
  let counter = 1;
  for (const redemptionInfoChunk of chunkedRedemptionInfos) {
    console.log(`Chunk ${counter} of ${chunkedRedemptionInfos.length}`);

    const lqtyTokenId = makeTokenId(LQTY_TOKEN_ADDRESS);
    const timestamps = redemptionInfoChunk.map(({ timestamp }) => timestamp);
    const batchResults = await fetchBatchHistoricalPrice(
      [LQTY_TOKEN_ADDRESS],
      timestamps
    );

    const lqtyPrices = batchResults[lqtyTokenId].prices;
    if (lqtyPrices.length !== redemptionInfoChunk.length) {
      console.log(
        "did not get the same number of prices back for lqty as timestamps requested"
      );
      return;
    }

    const zipped = zip(redemptionInfoChunk, lqtyPrices) as unknown as [
      RedemptionInfo,
      PriceInfo
    ][];

    const newRedemptionInfos: RedemptionInfo[] = zipped.map(
      ([redemptionInfo, lqtyPriceInfo]) => {
        return {
          block: redemptionInfo.block,
          redeemer: redemptionInfo.redeemer,
          timestamp: redemptionInfo.timestamp,
          txHash: redemptionInfo.txHash,
          totalLqtyStaked: redemptionInfo.totalLqtyStaked,
          ethFee: redemptionInfo.ethFee,
          ethPrice: redemptionInfo.ethPrice,
          ethSent: redemptionInfo.ethSent,
          lqtyPrice: `${lqtyPriceInfo?.price || "0"}`,
        };
      }
    );

    updatedRedemptionInfos.push(...newRedemptionInfos);

    // write a local file
    const json = makeRedemptionInfosFile(updatedRedemptionInfos);
    writeFile(REDEMPTION_INFOS_FILE_PATH, json);
    counter++;
  }

  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "redemptionInfos.json",
    fileData: makeRedemptionInfosFile(updatedRedemptionInfos),
  });

  console.log("Successfully uploaded object!", data);
})();
