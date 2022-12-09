import {
  PutObjectCommand,
  PutObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";

export async function pushToS3<T>(
  s3: S3Client,
  fileData: T
): Promise<PutObjectCommandOutput> {
  const bufferFileData = Buffer.from(JSON.stringify(fileData));
  const bucketParams = new PutObjectCommand({
    Bucket: "lusd-borrowing-fee-paid-events",
    Key: "LUSDBorrowingFeePaid.json",
    Body: bufferFileData,
    ContentEncoding: "base64",
    ContentType: "application/json",
  });
  const data = await s3.send(bucketParams);
  return data;
}
