import { Abi, ExtractAbiEventNames, ExtractAbiEvent } from "abitype";
import { BigNumber, Event } from "ethers";

/**
 * FilterArray<['a', 'b', 'c'], 'b'> = ['a', 'c']
 */
type FilterArray<T extends readonly any[], V> = T extends readonly [
  infer L,
  ...infer R
]
  ? L extends V
    ? [L, ...FilterArray<R, V>]
    : [...FilterArray<R, V>]
  : [];

/**
 * Events in a contract abi look like this. There's obviously more fields, but
 * these are the ones we care about.
 */
type AbiEventObject = { type: "address" | "uint256" };

/**
 * A mapping of event abi "type" field values to their typescript equivalents.
 */
type TransformEventTypeMap = {
  address: string;
  uint256: BigNumber;
};

/**
 * The resulting tuple of args values returned in an event from queryFilter.
 */
type TransformEventTypes<Tup extends readonly AbiEventObject[]> =
  Tup extends readonly [
    infer H extends AbiEventObject,
    ...infer R extends readonly AbiEventObject[]
  ]
    ? [TransformEventTypeMap[H["type"]], ...TransformEventTypes<R>]
    : Tup;

/**
 * A strongly typed Event you can expect back from calling queryFilter.
 * eg: TypedEvent<erc20ABI, 'Transfer'> =
 *     { args: [from: string, to: string, amount: number]}
 */

export interface TypedEvent<
  ContractABI extends Abi,
  EventName extends ExtractAbiEventNames<ContractABI>
> extends Event {
  args: TransformEventTypes<
    FilterArray<
      ExtractAbiEvent<ContractABI, EventName>["inputs"],
      { indexed: true } | { indexed: false }
    >
  >;
}

/**
 * A mapping of event abi "type" field values to their typescript equivalents.
 * This is for the filterArgs passed to queryFilter, so each one can also be
 * null.
 */
type TransformFilterTypeMap = {
  address: string | null;
  uint256: BigNumber | null;
};

/**
 * Identical to TransformEventTypes, however the resulting tuple will have null
 * as an option for each value. These are the accepted filterArgs values when
 * using queryFilter
 */
type TransformFilterTypes<Tup extends readonly AbiEventObject[]> =
  Tup extends readonly [
    infer H extends AbiEventObject,
    ...infer R extends readonly AbiEventObject[]
  ]
    ? [TransformFilterTypeMap[H["type"]], ...TransformFilterTypes<R>]
    : Tup;

/**
 * The filterArgs tuple containing all possible indexed fields you can use with
 * queryFilter, eg:
 *
 * ExtractEventFilterArgs<erc20ABI, 'Transfer'> =
 *   [from: string | null, to: string | null]
 */
export type ExtractEventFilterArgs<
  ContractABI extends Abi,
  EventName extends ExtractAbiEventNames<ContractABI>
> = TransformFilterTypes<
  FilterArray<
    ExtractAbiEvent<ContractABI, EventName>["inputs"],
    { indexed: true }
  >
>;
