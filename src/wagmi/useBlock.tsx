import { ethers, Event } from "ethers";
import { useQuery } from "wagmi";
import { provider } from "./client";

export function useBlock(blockNumber: number) {
  return useQuery(["getBlock", blockNumber], {
    queryFn: async () => provider({ chainId: 1 }).getBlock(blockNumber),
    staleTime: Infinity,
  });
}
