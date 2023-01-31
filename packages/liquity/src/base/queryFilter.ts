import { Abi, ExtractAbiEventNames } from "abitype";
import { Contract } from "ethers";
import { ExtractEventFilterArgs, TypedEvent } from "src/base/abitype";
import { createBlockIntervals } from "src/base/blocks";

interface QueryEventsOptions<
  ContractABI extends Abi,
  ContractEventName extends ExtractAbiEventNames<ContractABI>
> {
  startBlock: number;
  endBlock: number;
  contract: Contract;
  eventName: ContractEventName;
  filterArgs: ExtractEventFilterArgs<ContractABI, ContractEventName>;
}

export async function queryFilter<
  ContractABI extends Abi,
  ContractEventName extends ExtractAbiEventNames<ContractABI>
>({
  startBlock,
  endBlock,
  contract,
  eventName,
  filterArgs,
}: QueryEventsOptions<ContractABI, ContractEventName>): Promise<
  TypedEvent<ContractABI, ContractEventName>[]
> {
  const blockIntervals = createBlockIntervals(startBlock, endBlock);
  const events: TypedEvent<ContractABI, ContractEventName>[] = [];
  for (const [blockIntervalStart, blockIntervalEnd] of blockIntervals) {
    const rawEvents = (await contract.queryFilter(
      contract.filters[eventName](...filterArgs),
      blockIntervalStart,
      blockIntervalEnd
    )) as TypedEvent<ContractABI, ContractEventName>[];

    events.push(...rawEvents);
  }

  return events;
}
