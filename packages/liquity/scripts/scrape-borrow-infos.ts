require("dotenv").config();

import { fetchJson } from "src/base/fetchJson";
import { writeFile } from "src/base/writeFile";
import { BorrowInfo, fetchBorrowInfos } from "src/borrow/borrowInfos";
import {
  BorrowInfosFile,
  makeBorrowInfosFile,
} from "src/borrow/makeBorrowInfosFile";
import { BORROW_INFOS_URL } from "src/borrow/s3";
import { alchemy } from "src/provider/provider";
import { pushToS3 } from "src/s3/pushToS3";
import { s3 } from "src/s3/s3Client";

const BORROW_INFOS_FILE_PATH = "src/borrow/json/borrowInfos.json";

(async () => {
  const provider = await alchemy.config.getProvider();

  const borrowInfosJson = await fetchJson<BorrowInfosFile>(BORROW_INFOS_URL);

  // scrape the latest borrow events, starting where we left off
  const newBorrowInfos = await fetchBorrowInfos(
    borrowInfosJson.data[borrowInfosJson.data.length - 1].block + 1,
    provider
  );

  const borrowInfos: BorrowInfo[] = [
    ...borrowInfosJson.data,
    ...newBorrowInfos,
  ];

  const json = makeBorrowInfosFile(borrowInfos);

  // write a local file
  writeFile(BORROW_INFOS_FILE_PATH, json);

  // Push the data up to s3
  const data = await pushToS3({
    s3,
    bucketName: "liquity",
    fileName: "borrowInfos.json",
    fileData: json,
  });

  console.log("Successfully uploaded object!", data);
})();
