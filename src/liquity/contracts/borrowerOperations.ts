import { useContract, useContractEvent, useQuery } from "wagmi";
import { BigNumber, Event } from "ethers";
import { provider } from "../../wagmi/client";
export const BORROWER_OPERATIONS_ADDRESS =
  "0x24179CD81c9e782A4096035f7eC97fB8B783e007";

// See: https://etherscan.io/txs?a=0x24179cd81c9e782a4096035f7ec97fb8b783e007&f=5
export const BORROWER_OPERATIONS_DEPLOYMENT_BLOCK = 12178582;

export function useRealtimeLUSDBorrowingFeePaidEvents(
  listener: (borrower: `0x${string}`, lusdFee: BigNumber, event: Event) => void
) {
  return useContractEvent({
    address: BORROWER_OPERATIONS_ADDRESS,
    abi: borrowerOperationsABI,
    eventName: "LUSDBorrowingFeePaid",
    listener,
    chainId: 1,
  });
}

export function useBorrowerOperations() {
  return useContract({
    address: BORROWER_OPERATIONS_ADDRESS,
    abi: borrowerOperationsABI,
    signerOrProvider: provider({ chainId: 1 }),
  });
}

export function useLUSDBorrowingFeePaidEvents(
  fromBlockOrBlockhash?: string | number,
  toBlock?: string | number
) {
  const borrowerOperations = useBorrowerOperations();
  return useQuery(["LUSDBorrowingFeePaid", fromBlockOrBlockhash, toBlock], {
    queryFn: async () =>
      borrowerOperations?.queryFilter(
        borrowerOperations.filters["LUSDBorrowingFeePaid"](null, null),
        fromBlockOrBlockhash,
        toBlock
      ),
  });
}
export const borrowerOperationsABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_activePoolAddress",
        type: "address",
      },
    ],
    name: "ActivePoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_collSurplusPoolAddress",
        type: "address",
      },
    ],
    name: "CollSurplusPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_defaultPoolAddress",
        type: "address",
      },
    ],
    name: "DefaultPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_gasPoolAddress",
        type: "address",
      },
    ],
    name: "GasPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_lqtyStakingAddress",
        type: "address",
      },
    ],
    name: "LQTYStakingAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_LUSDFee",
        type: "uint256",
      },
    ],
    name: "LUSDBorrowingFeePaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_lusdTokenAddress",
        type: "address",
      },
    ],
    name: "LUSDTokenAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newPriceFeedAddress",
        type: "address",
      },
    ],
    name: "PriceFeedAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_sortedTrovesAddress",
        type: "address",
      },
    ],
    name: "SortedTrovesAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_stabilityPoolAddress",
        type: "address",
      },
    ],
    name: "StabilityPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "arrayIndex",
        type: "uint256",
      },
    ],
    name: "TroveCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTroveManagerAddress",
        type: "address",
      },
    ],
    name: "TroveManagerAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_debt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_coll",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum BorrowerOperations.BorrowerOperation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "TroveUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "BORROWING_FEE_FLOOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CCR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DECIMAL_PRECISION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LUSD_GAS_COMPENSATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MCR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_NET_DEBT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENT_DIVISOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_100pct",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activePool",
    outputs: [
      { internalType: "contract IActivePool", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "addColl",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collWithdrawal",
        type: "uint256",
      },
      { internalType: "uint256", name: "_LUSDChange", type: "uint256" },
      { internalType: "bool", name: "_isDebtIncrease", type: "bool" },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "adjustTrove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeTrove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultPool",
    outputs: [
      { internalType: "contract IDefaultPool", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_debt", type: "uint256" }],
    name: "getCompositeDebt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemColl",
    outputs: [
      {
        internalType: "uint256",
        name: "entireSystemColl",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "entireSystemDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lqtyStaking",
    outputs: [
      { internalType: "contract ILQTYStaking", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lqtyStakingAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lusdToken",
    outputs: [
      { internalType: "contract ILUSDToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_borrower", type: "address" },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "moveETHGainToTrove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      { internalType: "uint256", name: "_LUSDAmount", type: "uint256" },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "openTrove",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed",
    outputs: [
      { internalType: "contract IPriceFeed", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_LUSDAmount", type: "uint256" },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "repayLUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_troveManagerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_activePoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_defaultPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stabilityPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gasPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collSurplusPoolAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeedAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sortedTrovesAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lusdTokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lqtyStakingAddress",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sortedTroves",
    outputs: [
      {
        internalType: "contract ISortedTroves",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "troveManager",
    outputs: [
      {
        internalType: "contract ITroveManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collWithdrawal",
        type: "uint256",
      },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "withdrawColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
      { internalType: "uint256", name: "_LUSDAmount", type: "uint256" },
      { internalType: "address", name: "_upperHint", type: "address" },
      { internalType: "address", name: "_lowerHint", type: "address" },
    ],
    name: "withdrawLUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
