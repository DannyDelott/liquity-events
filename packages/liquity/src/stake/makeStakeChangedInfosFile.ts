import { StakeChangedInfo } from "src/stake/stakeChangedInfos";

export interface StakeChangedInfosFile {
  name: "StakeChangedInfo";
  data: StakeChangedInfo[];
}

export function makeStakeChangedInfosFile(
  stakeChangedInfos: StakeChangedInfo[]
): StakeChangedInfosFile {
  return { name: "StakeChangedInfo", data: stakeChangedInfos };
}
