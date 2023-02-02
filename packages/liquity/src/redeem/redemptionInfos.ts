import { AlchemyProvider } from "alchemy-sdk";
import { formatEther } from "ethers/lib/utils";
import { writeFile } from "src/base/writeFile";
import {
  RedemptionEvent,
  troveOperationsABI,
  TROVE_OPERATIONS_ADDRESS,
} from "src/contracts/troveOperations";
import { fetchEthPrice, fetchPrice } from "src/defillama";
import { makeEventInfos } from "src/makeEventInfos";
import { makeRedemptionInfosFile } from "src/redeem/makeRedemptionInfosFile";
import { getTotalLQTYStakedAtBlock } from "src/stake/getTotalLQTYStakedAtBlock";
import redemptionInfosJson from "src/redeem/json/redemptionInfos.json";
import { LQTY_TOKEN_ADDRESS } from "src/lqtyToken";

export interface RedemptionInfo {
  block: number;
  txHash: string;
  timestamp: number;
  redeemer: string;
  ethFee: string;
  ethPrice: string;
  ethSent: string;
  totalLqtyStaked: string;
  lqtyPrice: string;
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
    mapEventToEventInfo: async (redeemEvent, existingInfos, totalEvents) => {
      const redemptionInfo = await mapEventToRedemptionInfo(
        redeemEvent,
        provider
      );
      console.log(
        `${existingInfos.length + 1} of ${totalEvents}: Fee ${
          redemptionInfo.ethFee
        }`
      );

      // write a local file, TODO: REMove this
      const json = makeRedemptionInfosFile([...existingInfos, redemptionInfo]);
      const REDEMPTION_INFOS_FILE_PATH = "src/redeem/json/redemptionInfos.json";
      writeFile(REDEMPTION_INFOS_FILE_PATH, json);

      return redemptionInfo;
    },
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
  const lqtyPrice = await fetchPrice(LQTY_TOKEN_ADDRESS, timestamp);
  const totalLqtyStaked = await getTotalLQTYStakedAtBlock(
    blockNumber,
    provider
  );

  const ethFee = formatEther(redemptionEvent.args[3]);
  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    redeemer: from,
    ethSent: formatEther(redemptionEvent.args[2]),
    ethFee,
    ethPrice: `${ethPrice}`,
    lqtyPrice: `${lqtyPrice?.price}` || "0",
    totalLqtyStaked,
  };
}
