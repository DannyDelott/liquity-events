import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { ReactElement, useMemo, useState } from "react";
import { useStakeChangedInfos } from "src/ui/stake/useStakeChangedInfos";
import { makeEtherscanBlockUrl, makeEtherscanTxUrl } from "src/etherscan";
import { formatLQTYOrLUSDLabel, formatPoolShare } from "src/ui/base/format";
import dateFormat from "dateformat";
import { isAddress } from "@ethersproject/address";
import { parseEther } from "@ethersproject/units";
import { formatEther } from "ethers/lib/utils.js";
import { SearchIcon, TrophyIcon } from "src/ui/base/icons";
import { CryptoIcon, IconName, IconSize } from "src/ui/crypto/CryptoIcon";

interface StakeHistoryTable {
  account: string;
}

enum SortByOptions {
  OLDEST_TO_NEWEST = "oldest_to_newest",
  NEWEST_TO_OLDEST = "newest_to_oldest",
}
export function StakeHistoryTable({
  account,
}: StakeHistoryTable): ReactElement {
  const { data: stakeChangedInfos, status } = useStakeChangedInfos(account);
  const [searchAddressDraft, setSearchAddressDraft] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [isSearchAddressValid, setIsSearchAddressValid] = useState(false);
  const [sortBy, setSortBy] = useState<SortByOptions>(
    SortByOptions.OLDEST_TO_NEWEST
  );
  const searchTableData = useMemo(() => {
    const data = stakeChangedInfos?.data.filter(({ staker }) => {
      return staker === searchAddress;
    });
    if (data && sortBy === SortByOptions.NEWEST_TO_OLDEST) {
      return data.reverse();
    }
    return data;
  }, [stakeChangedInfos?.data, sortBy, searchAddress]);

  const accountTableData = useMemo(() => {
    const data = stakeChangedInfos?.data.filter(({ staker }) => {
      return staker === account;
    });
    if (data && sortBy === SortByOptions.NEWEST_TO_OLDEST) {
      return data.reverse();
    }
    return data;
  }, [stakeChangedInfos?.data, sortBy, account]);

  const tableData = isSearchAddressValid ? searchTableData : accountTableData;

  return (
    <div className="daisy-card bg-base-100">
      <figure className="bg-[#D2D6DC14] border-b-2 flex w-full">
        <div className="mt-8 flex flex-col gap-8 w-full">
          <div className="flex flex-col justify-center items-center px-24 text-center m-auto">
            <h2 className="text-2xl font-bold mb-2">Staking History</h2>
            <span className="">
              View each time an address has staked or unstaked from the LQTY
              Staking Pool.
            </span>
          </div>
          <div className="w-full flex justify-between mb-4 px-8 gap-8">
            <div className="daisy-form-control flex-1 w-full items-center">
              <div className="daisy-input-group w-2/3">
                <input
                  type="text"
                  placeholder="Enter a staker address..."
                  className={classNames(
                    "daisy-input daisy-input-bordered w-full",
                    {
                      "daisy-input-error": !isSearchAddressValid,
                    }
                  )}
                  onChange={(e) => setSearchAddressDraft(e.target.value)}
                />
                <button
                  className={classNames(
                    "daisy-btn daisy-btn-outline daisy-btn-square",
                    {
                      "daisy-btn-primary": isSearchAddressValid,
                      "daisy-btn-error": !isSearchAddressValid,
                    }
                  )}
                  onClick={() => {
                    if (!isAddress(searchAddressDraft)) {
                      console.log("searchAddressDraft", searchAddressDraft);
                      setIsSearchAddressValid(false);
                      return;
                    }
                    setIsSearchAddressValid(true);
                    setSearchAddress(searchAddressDraft);
                  }}
                >
                  <SearchIcon height={20} width={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="daisy-card-body flex justify-center flex-col items-center gap-4 ">
        <div className="daisy-stats">
          <div className="daisy-stat place-items-center">
            <div className="daisy-stat-title">Staker Rank</div>
            <div className="daisy-stat-value flex gap-2 justify-center items-center">
              <TrophyIcon height={32} width={32} />
              12th
            </div>
          </div>
          <div className="daisy-stat place-items-center">
            <div className="daisy-stat-title">Staked Balance</div>
            <div className="daisy-stat-value flex gap-2 justify-center">
              <CryptoIcon
                icon={IconName.LQTY}
                size={IconSize.MEDIUM}
                className={"flex-shrink-0"}
              />
              19,115,232.86
            </div>
          </div>

          <div className="daisy-stat place-items-center">
            <div className="daisy-stat-title">Unclaimed Rewards</div>
            <div className="daisy-stat-value flex gap-2 justify-center">
              <CryptoIcon
                icon={IconName.LUSD}
                size={IconSize.MEDIUM}
                className={"flex-shrink-0"}
              />
              1,200,232.97
            </div>
          </div>
        </div>
        <div className="daisy-divider"></div>

        <div className="flex flex-col justify-center overflow-x-auto gap-4">
          <div className="flex w-full justify-end">
            <select
              className="daisy-select daisy-select-bordered "
              onChange={(e) =>
                setSortBy(e.target.value as unknown as SortByOptions)
              }
            >
              <option disabled>Sort by</option>
              <option value={SortByOptions.OLDEST_TO_NEWEST}>
                Date (oldest to newest)
              </option>
              <option value={SortByOptions.NEWEST_TO_OLDEST}>
                Date (newest to oldest)
              </option>
            </select>
          </div>
          <table
            className={classNames("relative daisy-table ", {
              "daisy-table-zebra": status === "success",
            })}
          >
            <thead>
              <tr>
                <th className="sticky top-0 ">Transaction</th>
                <th className="sticky top-0 ">Date</th>
                <th className="sticky top-0 ">Amount</th>
                <th className="sticky top-0 ">Pool Share</th>
                <th className="sticky top-0 ">Pool Total</th>
              </tr>
            </thead>
            <tbody>
              {status === "loading"
                ? Array.from(Array(6)).map((v, i) => (
                    <tr key={i}>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                      <td>
                        <Skeleton />
                      </td>
                    </tr>
                  ))
                : tableData?.map(
                    (
                      {
                        staker,
                        block,
                        newStake,
                        timestamp,
                        totalLqtyStaked,
                        txHash,
                      },
                      i
                    ) => {
                      const date = new Date(timestamp * 1000);
                      const prevTableData =
                        sortBy === SortByOptions.OLDEST_TO_NEWEST
                          ? tableData[i - 1]
                          : tableData[i + 1];
                      const stakedDelta = prevTableData
                        ? formatEther(
                            parseEther(newStake).sub(
                              parseEther(prevTableData.newStake)
                            )
                          )
                        : null;
                      return (
                        <tr key={txHash}>
                          <td className={""}>
                            <a
                              href={makeEtherscanTxUrl(txHash)}
                              className="daisy-link hover:no-underline"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {txHash.slice(0, 21)}...
                            </a>
                            <br />
                            <a
                              href={makeEtherscanBlockUrl(block)}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="daisy-badge daisy-badge-outline hover:daisy-badge-ghost daisy-badge-sm mt-1 ">
                                Block: {block}
                              </span>
                            </a>
                          </td>
                          <td
                            className={``}
                            title={dateFormat(date, "mmmm d, yyyy @ h:MM TT")}
                          >
                            {dateFormat(date, "mmm d, yyyy")}
                          </td>

                          <td className={`font-bold`} align="right">
                            {formatLQTYOrLUSDLabel(newStake)}
                            <br />{" "}
                            {stakedDelta ? (
                              +stakedDelta > 0 ? (
                                <span className="text-[green]">
                                  ({`+${formatLQTYOrLUSDLabel(stakedDelta)}`})
                                </span>
                              ) : (
                                <span className="text-[red]">
                                  ({`${formatLQTYOrLUSDLabel(stakedDelta)}`})
                                </span>
                              )
                            ) : (
                              <span className="text-[green]">
                                ({`+${formatLQTYOrLUSDLabel(newStake)}`})
                              </span>
                            )}
                          </td>
                          <td className={``} align="right">
                            {formatPoolShare(+newStake / +totalLqtyStaked)}
                          </td>
                          <td className={``} align="right">
                            {formatLQTYOrLUSDLabel(totalLqtyStaked)}
                          </td>
                        </tr>
                      );
                    }
                  )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
