require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import { alchemy } from "src/provider/provider";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";
import {
  makeStakeChangedInfosFile,
  StakeChangedInfosFile,
} from "src/stake/makeStakeChangedInfosFile";
import {
  fetchStakeChangedInfos,
  STAKE_CHANGED_INFOS_URL,
  StakeChangedInfo,
} from "src/stake/stakeChangedInfos";

const STAKE_CHANGED_INFOS_FILE_PATH = "src/stake/json/stakeChangedInfos.json";

(async () => {
  const provider = await alchemy.config.getProvider();

  const stakeChangedInfosJson = await fetchJson<StakeChangedInfosFile>(
    STAKE_CHANGED_INFOS_URL
  );

  // scrape the latest borrow events, starting where we left off
  const newBorrowInfos = await fetchStakeChangedInfos(
    stakeChangedInfosJson.data[stakeChangedInfosJson.data.length - 1].block + 1,
    provider
  );

  const borrowInfos: StakeChangedInfo[] = [
    ...stakeChangedInfosJson.data,
    ...newBorrowInfos,
  ];

  const json = makeStakeChangedInfosFile(borrowInfos);

  // write a local file
  writeFile(STAKE_CHANGED_INFOS_FILE_PATH, json);

  // Push the data up to s3
  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "stakeChangedInfos.json",
    fileData: json,
  });

  console.log("Successfully uploaded object!", data);
})();
