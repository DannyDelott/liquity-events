import fs from "fs";
export function writeFile<T>(outputPath: string, data: T) {
  const file = JSON.stringify(data, null, 2);
  fs.writeFileSync(outputPath, file, { encoding: "utf-8" });
}
