import { useBalance } from "wagmi";

export function useTokenBalance(address: string | undefined, token: string) {
  return useBalance({
    address: address as `0x${string}` | undefined,
    token: token as `0x${string}`,
  });
}
