import { useQuery } from "@tanstack/react-query";
import { alchemy } from "src/provider";
import { BORROW_INFOS_URL, BorrowInfosFile, fetchBorrowInfos } from "liquity";
import { ONE_DAY_IN_MILLISECONDS } from "src/base/time";

export function useBorrowInfos() {
  return useQuery({
    queryKey: ["borrow-infos"],
    queryFn: async () => {
      const response = await fetch(BORROW_INFOS_URL);
      const borrowInfos = (await response.json()) as BorrowInfosFile;

      const provider = await alchemy.config.getProvider();
      const remainingBorrowInfos = await fetchBorrowInfos(
        borrowInfos.data[borrowInfos.data.length - 1].block + 1,
        provider
      );

      return {
        ...borrowInfos,
        data: [...borrowInfos.data, ...remainingBorrowInfos],
      };
    },
    // This is scraped fresh once a day
    staleTime: ONE_DAY_IN_MILLISECONDS,
  });
}
