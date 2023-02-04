require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import { TROVE_OPERATIONS_DEPLOYMENT_BLOCK } from "src/contracts/troveOperations";
import { alchemy } from "src/provider/provider";
import {
  makeRedemptionInfosFile,
  RedemptionInfosFile,
} from "src/redeem/makeRedemptionInfosFile";
import {
  fetchRedemptionInfos,
  RedemptionInfo,
} from "src/redeem/redemptionInfos";
import { REDEMPTION_INFOS_URL } from "src/redeem/s3";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";

const REDEMPTION_INFOS_FILE_PATH = "src/redeem/json/redemptionInfos.json";

(async () => {
  const provider = await alchemy.config.getProvider();

  const redemptionInfosJson = await fetchJson<RedemptionInfosFile>(
    REDEMPTION_INFOS_URL
  );

  // scrape the latest redemption infos, starting where we left off
  const newRedemptionInfos = await fetchRedemptionInfos(
    redemptionInfosJson.data[redemptionInfosJson.data.length - 1].block + 1,
    provider
  );

  const redemptionInfos: RedemptionInfo[] = [
    ...redemptionInfosJson.data,
    ...newRedemptionInfos,
  ];

  const json = makeRedemptionInfosFile(redemptionInfos);

  // write a local file
  writeFile(REDEMPTION_INFOS_FILE_PATH, json);

  // Push the data up to s3
  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "redemptionInfos.json",
    fileData: json,
  });

  console.log("Successfully uploaded object!", data);
})();
