import range from "lodash.range";
export const ONE_WEEK_IN_BLOCKS = 50_000;

export function createBlockIntervals(
  startBlock: number,
  endBlock: number
): [number, number][] {
  const blockRange = range(startBlock, endBlock, 50000);

  const blockIntervals: [number, number][] = [];
  blockRange.forEach((blockNumber, i) => {
    const nextBlock =
      i === blockRange.length - 1 ? endBlock : blockRange[i + 1];
    const chunk: [number, number] = [blockNumber, nextBlock];
    blockIntervals.push(chunk);
  });

  return blockIntervals;
}
