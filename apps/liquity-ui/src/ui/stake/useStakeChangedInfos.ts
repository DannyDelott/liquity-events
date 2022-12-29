import { useQuery } from "@tanstack/react-query";
import {
  fetchStakeChangedInfos,
  STAKE_CHANGED_INFOS_URL,
  StakeChangedInfosFile,
} from "liquity";
import { ONE_DAY_IN_MILLISECONDS } from "src/base/time";
import { alchemy } from "src/provider";

export function useStakeChangedInfos(address?: string) {
  return useQuery({
    queryKey: ["stake-changed-infos", address],
    queryFn: async () => {
      const response = await fetch(STAKE_CHANGED_INFOS_URL);
      const stakeChangedInfos =
        (await response.json()) as StakeChangedInfosFile;

      const provider = await alchemy.config.getProvider();
      const remainingStakeChangedInfos = await fetchStakeChangedInfos(
        stakeChangedInfos.data[stakeChangedInfos.data.length - 1].block + 1,
        provider,
        address
      );

      return {
        ...stakeChangedInfos,
        data: [...stakeChangedInfos.data, ...remainingStakeChangedInfos],
      };
    },
    // This is scraped fresh once a day
    staleTime: ONE_DAY_IN_MILLISECONDS,
  });
}
