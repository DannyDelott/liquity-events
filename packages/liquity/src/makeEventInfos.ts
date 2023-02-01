import { Abi, ExtractAbiEventNames } from "abitype";
import { AlchemyProvider } from "alchemy-sdk";
import { Contract, ContractInterface } from "ethers";
import { ExtractEventFilterArgs, TypedEvent } from "src/base/abitype";
import { queryFilter } from "src/base/queryFilter";

interface MakeEventInfosOptions<
  ContractABI extends Abi,
  EventName extends ExtractAbiEventNames<ContractABI>,
  EventInfo
> {
  contractAddress: string;
  contractABI: ContractABI;
  eventName: EventName;
  filterArgs: ExtractEventFilterArgs<ContractABI, EventName>;
  startBlock: number;
  endBlock: number;
  mapEventToEventInfo: (
    currentEvent: TypedEvent<ContractABI, EventName>,
    existingEventInfos: EventInfo[],
    totalEvents: number
  ) => Promise<EventInfo>;
  provider: AlchemyProvider;
  eventPredicate?: (event: TypedEvent<ContractABI, EventName>) => boolean;
}

export async function makeEventInfos<
  ContractABI extends Abi,
  EventName extends ExtractAbiEventNames<ContractABI>,
  EventInfo
>({
  contractAddress,
  contractABI,
  eventName,
  filterArgs,
  startBlock,
  endBlock,
  mapEventToEventInfo,
  provider,
  eventPredicate,
}: MakeEventInfosOptions<ContractABI, EventName, EventInfo>): Promise<
  EventInfo[]
> {
  const contract = new Contract(
    contractAddress,
    contractABI as ContractInterface,
    provider
  );

  // Collect the events from on-chain
  const events = await queryFilter<ContractABI, EventName>({
    contract,
    startBlock,
    endBlock,
    eventName,
    filterArgs,
  });

  // We only care about events that pass the eventPredicate
  let eventsToKeep: TypedEvent<ContractABI, EventName>[] = events;
  if (eventPredicate) {
    eventsToKeep = events.filter((event) => eventPredicate(event));
  }

  console.log(
    `${eventName}: ${events.length} events (startBlock #${startBlock}, endBlock #${endBlock})`
  );

  // Now map the events to the event infos
  const eventInfos: EventInfo[] = [];
  for (const event of eventsToKeep) {
    const eventInfo = await mapEventToEventInfo(
      event,
      eventInfos,
      eventsToKeep.length
    );
    eventInfos.push(eventInfo);
  }

  return eventInfos;
}
