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
  StakeChangedInfo,
} from "src/stake/stakeChangedInfos";
import { STAKE_CHANGED_INFOS_URL } from "src/stake/s3";

const STAKE_CHANGED_INFOS_FILE_PATH = "src/stake/json/stakeChangedInfos.json";

(async () => {
  const provider = await alchemy.config.getProvider();

  const stakeChangedInfosJson = await fetchJson<StakeChangedInfosFile>(
    STAKE_CHANGED_INFOS_URL
  );

  // scrape the latest stakeChanged events, starting where we left off
  const newStakeChangedInfos = await fetchStakeChangedInfos(
    stakeChangedInfosJson.data[stakeChangedInfosJson.data.length - 1].block + 1,
    provider
  );

  const stakeChangedInfos: StakeChangedInfo[] = [
    ...stakeChangedInfosJson.data,
    ...newStakeChangedInfos,
  ];

  const json = makeStakeChangedInfosFile(stakeChangedInfos);

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
