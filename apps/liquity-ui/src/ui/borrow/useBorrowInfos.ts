import { useQuery } from "@tanstack/react-query";
import { BORROW_INFOS_URL, BorrowInfosFile } from "liquity";
import { ONE_DAY_IN_MILLISECONDS } from "src/base/time";

export function useBorrowInfosJson() {
  return useQuery({
    queryKey: ["borrow-infos"],
    queryFn: async () => {
      const response = await fetch(BORROW_INFOS_URL);
      const data = (await response.json()) as BorrowInfosFile;
      return data;
    },
    // This is scraped fresh once a day
    staleTime: ONE_DAY_IN_MILLISECONDS,
  });
}
