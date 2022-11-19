import { BigNumber, Event } from "ethers";
import {
  useContract,
  useContractEvent,
  useContractRead,
  useQuery,
} from "wagmi";
import { provider } from "../../wagmi/client";

export const LIQUITY_STAKING_ADDRESS =
  "0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d";
export const LIQUITY_STAKING_DEPLOYMENT_BLOCK = 12178607;

/**
 * Gets the user's current staked amount of LQTY.
 */
export function useStakes(user: `0x${string}`, atBlock?: number) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "stakes",
    args: [user],
    overrides: { blockTag: atBlock || "latest" },
  });
}
/**
 * Gets the total amount of LQTY currently staked in the system.
 */
export function useTotalLQTYStaked(atBlock?: number) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "totalLQTYStaked",
    overrides: { blockTag: atBlock || "latest" },
  });
}
/**
 * Gets the user's current pending LUSD gains, ie: the yield from borrowing fees
 * paid by users when borrowing LUSD in their trove. This gets withdrawn
 * whenever you change your stake or withdraw the gains directly.
 */
export function useGetPendingLUSDGain(user: `0x${string}`) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "getPendingLUSDGain",
    args: [user],
  });
}

/**
 * Gets the user's current pending ETH gains, ie: the yield from redemption fees
 * paid by users who pay back there loans. This gets withdrawn whenever you
 * change your stake or withdraw the gains directly.
 */
export function useGetPendingETHGain(user: `0x${string}`) {
  return useContractRead({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    functionName: "getPendingETHGain",
    args: [user],
  });
}

export function useLiquityStaking() {
  return useContract({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    signerOrProvider: provider({ chainId: 1 }),
  });
}
/**
 * Grabs every time the staker changed the amount they staked, either adding
 * more LQTY to the staking contract or removing it.
 */
export function useStakeChangedEvents(
  staker: `0x${string}` | null,
  fromBlockOrBlockhash?: string | number,
  toBlock?: string | number
) {
  const liquityStaking = useLiquityStaking();
  return useQuery(["StakeChanged", staker, fromBlockOrBlockhash, toBlock], {
    queryFn: async () =>
      liquityStaking?.queryFilter(
        liquityStaking.filters["StakeChanged"](staker, null),
        fromBlockOrBlockhash,
        toBlock
      ),
  });
}

export function useRealtimeTotalLQTYStakedUpdatedEvents(
  listener: (totalLQTYStaked: BigNumber, event: Event) => void
) {
  return useContractEvent({
    address: LIQUITY_STAKING_ADDRESS,
    abi: lqtyStakingABI,
    eventName: "TotalLQTYStakedUpdated",
    listener,
    chainId: 1,
  });
}

/**
 * Grabs every time the system's total staked LQTY amount changes. This gets
 * emitted in the same transaction as StakeChanged and can be used in
 * combination with StakeChanged to calculate historical pool share.
 */
export function useTotalLQTYStakedUpdatedEvents(
  fromBlockOrBlockhash?: string | number,
  toBlock?: string | number,
  options?: { enabled: boolean }
) {
  const liquityStaking = useLiquityStaking();
  return useQuery(["TotalLQTYStakedUpdated", fromBlockOrBlockhash, toBlock], {
    queryFn: async () =>
      liquityStaking?.queryFilter(
        liquityStaking.filters["TotalLQTYStakedUpdated"](null),
        fromBlockOrBlockhash,
        toBlock
      ),
    enabled: options?.enabled || true,
  });
}

export const lqtyStakingABI = [
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
    name: "ActivePoolAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_borrowerOperationsAddress",
        type: "address",
      },
    ],
    name: "BorrowerOperationsAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "EtherSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_F_ETH",
        type: "uint256",
      },
    ],
    name: "F_ETHUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_F_LUSD",
        type: "uint256",
      },
    ],
    name: "F_LUSDUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_lqtyTokenAddress",
        type: "address",
      },
    ],
    name: "LQTYTokenAddressSet",
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
    name: "LUSDTokenAddressSet",
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
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newStake",
        type: "uint256",
      },
    ],
    name: "StakeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_F_ETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_F_LUSD",
        type: "uint256",
      },
    ],
    name: "StakerSnapshotsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "LUSDGain",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ETHGain",
        type: "uint256",
      },
    ],
    name: "StakingGainsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalLQTYStaked",
        type: "uint256",
      },
    ],
    name: "TotalLQTYStakedUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_troveManager",
        type: "address",
      },
    ],
    name: "TroveManagerAddressSet",
    type: "event",
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
    name: "F_ETH",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "F_LUSD",
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
    name: "activePoolAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "borrowerOperationsAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getPendingETHGain",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "getPendingLUSDGain",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_ETHFee", type: "uint256" }],
    name: "increaseF_ETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_LUSDFee", type: "uint256" }],
    name: "increaseF_LUSD",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "lqtyToken",
    outputs: [
      { internalType: "contract ILQTYToken", name: "", type: "address" },
    ],
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
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_lqtyTokenAddress", type: "address" },
      { internalType: "address", name: "_lusdTokenAddress", type: "address" },
      {
        internalType: "address",
        name: "_troveManagerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrowerOperationsAddress",
        type: "address",
      },
      { internalType: "address", name: "_activePoolAddress", type: "address" },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "snapshots",
    outputs: [
      { internalType: "uint256", name: "F_ETH_Snapshot", type: "uint256" },
      { internalType: "uint256", name: "F_LUSD_Snapshot", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_LQTYamount", type: "uint256" }],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalLQTYStaked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "troveManagerAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_LQTYamount", type: "uint256" }],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
] as const;
