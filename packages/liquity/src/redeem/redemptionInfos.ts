import { AlchemyProvider } from "alchemy-sdk";
import { formatEther } from "ethers/lib/utils";
import {
  RedemptionEvent,
  troveOperationsABI,
  TROVE_OPERATIONS_ADDRESS,
} from "src/contracts/troveOperations";
import { fetchEthPrice } from "src/defillama";
import { makeEventInfos } from "src/makeEventInfos";

export interface RedemptionInfo {
  block: number;
  txHash: string;
  timestamp: number;
  redeemer: string;
  ethFee: string;
  ethFeeUSD: string;
  ethSent: string;
}

export async function fetchRedemptionInfos(
  startBlock: number,
  provider: AlchemyProvider
): Promise<RedemptionInfo[]> {
  const latestBlock = await provider.getBlockNumber();

  return makeEventInfos<
    typeof troveOperationsABI,
    "Redemption",
    RedemptionInfo
  >({
    contractAddress: TROVE_OPERATIONS_ADDRESS,
    contractABI: troveOperationsABI,
    startBlock: startBlock,
    endBlock: latestBlock,
    eventName: "Redemption",
    filterArgs: [],
    provider,
    mapEventToEventInfo: (redeemEvent) =>
      mapEventToRedemptionInfo(redeemEvent, provider),
  });
}

async function mapEventToRedemptionInfo(
  redemptionEvent: RedemptionEvent,
  provider: AlchemyProvider
): Promise<RedemptionInfo> {
  const { blockNumber, transactionHash } = redemptionEvent;
  const { from } = await provider.getTransaction(transactionHash);
  const { timestamp } = await provider.getBlock(blockNumber);
  const { price: ethPrice } = await fetchEthPrice(timestamp);

  const ethFee = formatEther(redemptionEvent.args[3]);
  const ethFeeUSD = `${ethPrice * +ethFee}`;
  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    redeemer: from,
    ethSent: formatEther(redemptionEvent.args[2]),
    ethFee,
    ethFeeUSD,
  };
}
