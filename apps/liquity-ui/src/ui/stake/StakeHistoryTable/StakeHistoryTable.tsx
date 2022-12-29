import classNames from "classnames";
import Skeleton from "react-loading-skeleton";
import { ReactElement, useMemo, useState } from "react";
import { useStakeChangedInfos } from "src/ui/stake/useStakeChangedInfos";
import { makeEtherscanBlockUrl, makeEtherscanTxUrl } from "src/etherscan";
import { formatLQTYLabel, formatPoolShare } from "src/ui/base/format";
import dateFormat from "dateformat";
import { isAddress } from "@ethersproject/address";
import { parseEther } from "@ethersproject/units";
import { formatEther } from "ethers/lib/utils.js";

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
  console.log("tableData", tableData);

  return (
    <div className="daisy-card bg-base-100">
      <div className="daisy-card-body flex justify-center flex-col items-center ">
        <h2 className="text-2xl font-bold flex-1 text-center mb-8">
          Staking History
        </h2>
        <div className="flex w-full justify-between">
          <div className="daisy-form-control">
            <div className="daisy-input-group">
              <input
                type="text"
                placeholder="Search staker address..."
                className={classNames("daisy-input daisy-input-bordered", {
                  "daisy-input-error": isSearchAddressValid,
                })}
                onChange={(e) => setSearchAddressDraft(e.target.value)}
              />
              <button
                className={classNames(
                  "daisy-btn daisy-btn-outline daisy-btn-square",
                  {
                    "daisy-btn-primary": !isSearchAddressValid,
                    "daisy-btn-error": isSearchAddressValid,
                  }
                )}
                onClick={() => {
                  if (!isAddress(searchAddressDraft)) {
                    setIsSearchAddressValid(false);
                    return;
                  }
                  setIsSearchAddressValid(true);
                  setSearchAddress(searchAddressDraft);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
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
        <div className="justify-center overflow-x-auto">
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
                            {formatLQTYLabel(newStake)}
                            <br />{" "}
                            {stakedDelta ? (
                              +stakedDelta > 0 ? (
                                <span className="text-[green]">
                                  ({`+${formatLQTYLabel(stakedDelta)}`})
                                </span>
                              ) : (
                                <span className="text-[red]">
                                  ({`${formatLQTYLabel(stakedDelta)}`})
                                </span>
                              )
                            ) : (
                              <span className="text-[green]">
                                ({`+${formatLQTYLabel(newStake)}`})
                              </span>
                            )}
                          </td>
                          <td className={``} align="right">
                            {formatPoolShare(+newStake / +totalLqtyStaked)}
                          </td>
                          <td className={``} align="right">
                            {formatLQTYLabel(totalLqtyStaked)}
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
