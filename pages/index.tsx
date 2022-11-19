import Head from "next/head";
import { makeEtherscanAddressUrl } from "../src/etherscan";
import {
  LIQUITY_STAKING_ADDRESS,
  useGetPendingETHGain,
  useGetPendingLUSDGain,
  useRealtimeTotalLQTYStakedUpdatedEvents,
  useStakeChangedEvents,
  useStakes,
  useTotalLQTYStaked,
} from "../src/liquity/contracts/lqtyStaking";
import { useBlock } from "../src/wagmi/useBlock";
import { BORROWER_OPERATIONS_DEPLOYMENT_BLOCK } from "../src/liquity/contracts/borrowerOperations";
import { PICKLE_FINANCE_STRATEGY } from "../src/picklefinance";
import {
  formatEtherLabel,
  formatLQTYLabel,
  formatLUSDLabel,
} from "../src/base/format";
import { formatEther } from "ethers/lib/utils.js";
import { StakeChangedTable } from "../src/liquity/StakeChangedTable/StakeChangedTable";
import { LUSDBorrowingFeePaidTable } from "../src/liquity/LUSDBorrowingFeePaidTable/LUSDBorrowingFeePaidTable";
import { CSSProperties } from "react";

const MY_WALLET = "0x171Da4C7e80e0Bc4Ae36dC903CC4A6dF30773d2D";
// const RANDO = "0x5D73A43c06B4e3d5101618b587917C7f18317770";

const account = MY_WALLET;
// const account = RANDO;

const thStyle = {
  padding: "5px 20px",
};
const tdStyle: CSSProperties = { textAlign: "center", padding: "5px 20px" };
export default function Home() {
  const { data: deploymentBlock } = useBlock(
    BORROWER_OPERATIONS_DEPLOYMENT_BLOCK
  );
  const date = new Date((deploymentBlock?.timestamp || 0) * 1000);
  const { data: stakeChangedEvents = [] } = useStakeChangedEvents(account);

  // Gets the total amount of LQTY staked in the system, and refetches it
  // whenever the total is updated
  const { data: totalLQTYStaked, refetch: refetchTotalLQTYStaked } =
    useTotalLQTYStaked();
  useRealtimeTotalLQTYStakedUpdatedEvents(() => refetchTotalLQTYStaked());

  // Calculate the pool share based on the total staked LQTY and the user's
  // staked balance.
  const { data: stakedLQTY } = useStakes(account);
  let poolShare = 0;
  let poolSharePercentLabel = "0%";
  if (stakedLQTY?.gt(0) && totalLQTYStaked?.gt(0)) {
    poolShare = +formatEther(stakedLQTY) / +formatEther(totalLQTYStaked);
    poolSharePercentLabel = `${(poolShare * 100).toFixed(4)}%`;
  }

  // Pending balances of LUSD and ETH gained
  const { data: pendingLUSDGain, refetch: refetchPendingLUSDGain } =
    useGetPendingLUSDGain(account);
  const { data: pendingETHGain, refetch: refetchPendingETHGain } =
    useGetPendingETHGain(account);

  return (
    <div>
      <Head>
        <title>Liquity Events</title>
        <meta
          name="description"
          content="A Liquity Protocol frontend for exploring events."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "32px",
        }}
      >
        <h1>Liquity Events</h1>
        <p>
          Liquity was deployed on <strong>{date.toDateString()}</strong>.
        </p>
        <p>
          There is a total of{" "}
          <strong>{formatLQTYLabel(totalLQTYStaked)} LQTY</strong> deposited in
          the{" "}
          <a
            target="_blank"
            href={makeEtherscanAddressUrl(LIQUITY_STAKING_ADDRESS)}
          >
            Staking Pool
          </a>
          .
        </p>
        <p>
          You have deposited <strong>{formatLQTYLabel(stakedLQTY)} LQTY</strong>
          , which means your share of the pool is{" "}
          <strong>{poolSharePercentLabel}</strong>.
        </p>
        <p>
          You have{" "}
          <strong style={{ color: pendingLUSDGain?.gt(0) ? "green" : "black" }}>
            {formatLUSDLabel(pendingLUSDGain)} LUSD
          </strong>{" "}
          pending LUSD gains.
        </p>
        <p>
          You have <strong>{formatEtherLabel(pendingETHGain, 4)}</strong>{" "}
          pending ETH gains.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "32px",
        }}
      >
        <h3>Realtime Earnings</h3>
        <LUSDBorrowingFeePaidTable
          account={account}
          onLUSDBorrowingFeePaid={() => {
            refetchPendingETHGain();
            refetchPendingLUSDGain();
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "32px",
        }}
      >
        <h3>Historical Earnings</h3>
        {/* <ol>
          <li>Get block range, starting from first stake until now</li>
          <li>Chunk block range into 50k block segments</li>
          <li>For each segment, get list of LUSDBorrowingFeePaid events</li>
          <li>
            For each event, get your staked amount (
            <code>lqtyStaking.stakes()</code>) and the total LQTY staked (
            <code>lqtyStaking.totalLQTYStaked()</code>) at that block
          </li>
          <li>Calculate your pool share and fee portion earned</li>
        </ol> */}
        <table style={{ width: "75%" }}>
          <caption
            style={{
              paddingBottom: 10,
            }}
          >
            <p>
              You had <strong>XXX LQTY</strong> staked from{" "}
              <strong>startBlock</strong> to <strong>endBlock</strong>, which
              earned yield on the following <strong>n</strong> events.
            </p>
          </caption>
          <thead>
            <tr>
              <th style={thStyle}>Block</th>
              <th style={thStyle}>Tx</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Borrower</th>
              <th style={thStyle}>Fee amount paid (LUSD)</th>
              <th style={thStyle}>Portion earned (LUSD)</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "32px",
        }}
      >
        <h3>Staking History</h3>
        <StakeChangedTable stakeChangedEvents={stakeChangedEvents} />
      </div>
    </div>
  );
}
