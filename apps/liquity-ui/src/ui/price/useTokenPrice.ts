import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { fetchPrice, PriceInfo } from "src/defillama";

export function useTokenPrice(
  tokenAddress: string,
  timestamp?: number
): QueryObserverResult<PriceInfo> {
  return useQuery({
    queryKey: [tokenAddress, timestamp],
    queryFn: async () => fetchPrice(tokenAddress, timestamp),
  });
}
