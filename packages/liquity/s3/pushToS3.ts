import {
  PutObjectCommand,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { gzip } from "node-gzip";

export async function pushToS3<T>(
  s3: S3Client,
  fileData: T
): Promise<PutObjectCommandOutput> {
  const bufferFileData = await gzip(Buffer.from(JSON.stringify(fileData)));
  const bucketParams = new PutObjectCommand({
    Bucket: "lusd-borrowing-fee-paid-events",
    Key: "LUSDBorrowingFeePaid.json",
    Body: bufferFileData,
    ContentEncoding: "gzip",
    ContentType: "application/json",
    ACL: "public-read",
  });
  const data = await s3.send(bucketParams);
  return data;
}
