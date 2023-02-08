import { formatEther } from "ethers/lib/utils.js";
import { formatLQTYOrLUSDLabel } from "src/ui/base/format";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";
import { DepositLQTYButton } from "src/ui/stake/DepositLQTYModal/DepositLQTYButton";
import { useLQTYStakedForAccount } from "src/ui/stake/useLQTYStakedForAccount";
import { useTotalLQTYStaked } from "src/ui/stake/useTotalLQTYStaked";
import { WithdrawLQTYButton } from "src/ui/stake/WithdrawLQTYModal/WithdrawLQTYButton";

export function StakedBalanceStat({ account }: { account: string }) {
  const { data: lqtyStaked } = useLQTYStakedForAccount(account);
  const formattedStakedBalance = formatLQTYOrLUSDLabel(lqtyStaked);

  const { data: totalLQTYStaked } = useTotalLQTYStaked();
  let poolShare = "";
  if (lqtyStaked && totalLQTYStaked) {
    poolShare = (
      (+formatEther(lqtyStaked) / +formatEther(totalLQTYStaked)) *
      100
    ).toFixed(4);
  }

  return (
    <div className="daisy-stats">
      <div className="daisy-stat pt-0 ">
        <div className="daisy-stat-title text-neutral-focus text-center ">
          Staked Balance
        </div>
        <div className="daisy-stat-value text-2xl md:text-4xl flex gap-1 md:gap-2 justify-center">
          <CryptoIcon
            icon={IconName.LQTY}
            size={IconSize.SMALL}
            className={"flex-shrink-0"}
          />
          {formattedStakedBalance}
        </div>
        <div className="daisy-stat-desc text-neutral mt-1 text-base">
          {poolShare}% of the LQTY Staking Pool
        </div>

        <div className="daisy-stat-actions gap-2 flex mt-2 justify-center">
          <DepositLQTYButton />
          <WithdrawLQTYButton />
        </div>
      </div>
    </div>
  );
}
