import { BorrowInfo } from "src/borrow/borrowInfos";

export interface BorrowInfosFile {
  name: "BorrowInfo";
  data: BorrowInfo[];
}

export function makeBorrowInfosFile(
  borrowInfos: BorrowInfo[]
): BorrowInfosFile {
  return { name: "BorrowInfo", data: borrowInfos };
}
