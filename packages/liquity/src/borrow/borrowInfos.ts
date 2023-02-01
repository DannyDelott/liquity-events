import { AlchemyProvider } from "alchemy-sdk";

import {
  borrowerOperationsABI,
  BORROWER_OPERATIONS_ADDRESS,
  LUSDBorrowingFeePaidEvent,
} from "src/contracts/borrowerOperations";
import { lqtyStakingContract } from "src/contracts/lqtyStaking";
import { formatEther } from "ethers/lib/utils";
import { fetchPrice } from "src/defillama";
import { LUSD_TOKEN_ADDRESS } from "src/lusdToken";
import { makeEventInfos } from "src/makeEventInfos";
import { LQTY_TOKEN_ADDRESS } from "src/lqtyToken";

export interface BorrowInfo {
  block: number;
  txHash: string;
  timestamp: number;
  borrower: string;
  lusdFee: string;
  lusdPrice: string;
  totalLqtyStaked: string;
  lqtyPrice: string;
}

export async function fetchBorrowInfos(
  startBlock: number,
  provider: AlchemyProvider
): Promise<BorrowInfo[]> {
  const latestBlock = await provider.getBlockNumber();

  return makeEventInfos<
    typeof borrowerOperationsABI,
    "LUSDBorrowingFeePaid",
    BorrowInfo
  >({
    contractABI: borrowerOperationsABI,
    contractAddress: BORROWER_OPERATIONS_ADDRESS,
    startBlock,
    endBlock: latestBlock,
    eventName: "LUSDBorrowingFeePaid",
    filterArgs: [null],
    eventPredicate: (event) => isNonZeroFeeEvent(event),
    provider,
    mapEventToEventInfo: async (event, existingInfos, totalEvents) => {
      const borrowInfo = await mapEventToBorrowInfo(event, provider);
      console.log(
        `${existingInfos.length + 1} of ${totalEvents}: Fee ${
          borrowInfo.lusdFee
        }`
      );
      return borrowInfo;
    },
  });
}

async function mapEventToBorrowInfo(
  lusdBorrowingFeePaidEvent: LUSDBorrowingFeePaidEvent,
  provider: AlchemyProvider
): Promise<BorrowInfo> {
  const { blockNumber, transactionHash } = lusdBorrowingFeePaidEvent;
  const { timestamp } = await provider.getBlock(blockNumber);

  // the totalLQTYStaked is useful for calculating your pool share at the time
  // of the event
  const lqtyStaking = lqtyStakingContract.connect(provider);
  const totalLqtyStaked = formatEther(
    await lqtyStaking["totalLQTYStaked"]({
      blockTag: blockNumber,
    })
  );

  const lusdFee = formatEther(lusdBorrowingFeePaidEvent.args[1]);

  // We need the $ value of the fee to calculate the staking APY.
  const lusdPriceResult = await fetchPrice(LUSD_TOKEN_ADDRESS, timestamp);

  // We also need the $ value of all the staked LQTY to calculate the staking
  // apy.
  const lqtyPriceResult = await fetchPrice(LQTY_TOKEN_ADDRESS, timestamp);

  return {
    block: blockNumber,
    txHash: transactionHash,
    timestamp,
    borrower: lusdBorrowingFeePaidEvent.args[0],
    lusdFee,
    // Default to $1 since lusd is a stable coin
    lusdPrice: `${lusdPriceResult?.price || "1"}`,
    totalLqtyStaked,
    lqtyPrice: `${lqtyPriceResult?.price || "0"}`,
  };
}

function isNonZeroFeeEvent(event: LUSDBorrowingFeePaidEvent) {
  return event.args[1].gt(0);
}
