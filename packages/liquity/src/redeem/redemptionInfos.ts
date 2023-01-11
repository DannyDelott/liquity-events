import { AlchemyProvider } from "alchemy-sdk";
import { Event } from "ethers";

import { formatEther } from "ethers/lib/utils";
import {
  troveOperationsABI,
  TROVE_OPERATIONS_ADDRESS,
  TROVE_OPERATIONS_DEPLOYMENT_BLOCK,
} from "src/contracts/troveOperations";
import { fetchEthPrice } from "src/defillama";
import { scrapeEventData } from "src/scrapeEventData";

export const REDEMPTION_INFOS_URL =
  "https://liquity.s3.amazonaws.com/redemptionInfos.json";

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

  return scrapeEventData<RedemptionInfo, typeof troveOperationsABI>({
    contractAddress: TROVE_OPERATIONS_ADDRESS,
    contractABI: troveOperationsABI,
    startBlock: startBlock,
    endBlock: latestBlock,
    eventName: "Redemption",
    filterArgs: [],
    provider,
    mapEventToEventData: async (redeemEvent) =>
      fetchRedemptionInfoForEvent(provider, redeemEvent),
  });
}

async function fetchRedemptionInfoForEvent(
  provider: AlchemyProvider,
  redemptionEvent: Event
): Promise<RedemptionInfo> {
  const { blockNumber, transactionHash } = redemptionEvent;
  const { from } = await provider.getTransaction(transactionHash);
  const { timestamp } = await provider.getBlock(blockNumber);
  const { price: ethPrice } = await fetchEthPrice(timestamp);

  const ethFee = formatEther(redemptionEvent.args?.[3]);
  const ethFeeUSD = `${ethPrice * +ethFee}`;
  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    redeemer: from,
    ethSent: formatEther(redemptionEvent.args?.[2]),
    ethFee,
    ethFeeUSD,
  };
}
