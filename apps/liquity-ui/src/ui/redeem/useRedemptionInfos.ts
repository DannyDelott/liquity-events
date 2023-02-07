import { useQuery } from "@tanstack/react-query";
import { alchemy } from "src/provider";
import {
  fetchRedemptionInfos,
  RedemptionInfosFile,
  REDEMPTION_INFOS_URL,
} from "liquity";
import { ONE_DAY_IN_MILLISECONDS } from "src/base/time";

export function useRedemptionInfos() {
  return useQuery({
    queryKey: ["redemption-infos"],
    queryFn: async () => {
      // Move fetch to own hook w/ staleTime 2 hours
      const response = await fetch(REDEMPTION_INFOS_URL);
      const redemptionInfos = (await response.json()) as RedemptionInfosFile;

      const provider = await alchemy.config.getProvider();
      const latestRedemptionInfos = await fetchRedemptionInfos(
        redemptionInfos.data[redemptionInfos.data.length - 1].block + 1,
        provider
      );

      return {
        ...redemptionInfos,
        data: [...redemptionInfos.data, ...latestRedemptionInfos],
      };
    },
    // This is scraped fresh once a day
    staleTime: ONE_DAY_IN_MILLISECONDS,
  });
}
