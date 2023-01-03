import { RedemptionInfo } from "src/redeem/redemptionInfos";

export interface RedemptionInfosFile {
  name: "RedemptionInfo";
  data: RedemptionInfo[];
}

export function makeRedemptionInfosFile(
  redemptionInfos: RedemptionInfo[]
): RedemptionInfosFile {
  return { name: "RedemptionInfo", data: redemptionInfos };
}
