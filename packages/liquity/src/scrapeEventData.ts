import { Abi, ExtractAbiEventNames } from "abitype";
import { AlchemyProvider } from "alchemy-sdk";
import { Contract, ContractInterface, Event } from "ethers";
import { createBlockIntervals } from "src/base/blocks";

interface ScrapeEventDataArguments<EventData, ContractABI extends Abi> {
  contractAddress: string;
  contractABI: ContractABI;
  eventName: ExtractAbiEventNames<ContractABI>;
  filterArgs: any[];
  startBlock: number;
  endBlock: number;
  mapEventToEventData: (event: Event) => Promise<EventData>;
  provider: AlchemyProvider;
  eventPredicate?: (event: Event) => boolean;
}

export async function scrapeEventData<EventData, ContractABI extends Abi>({
  contractAddress,
  contractABI,
  eventName,
  filterArgs,
  startBlock,
  endBlock,
  mapEventToEventData,
  provider,
  eventPredicate,
}: ScrapeEventDataArguments<EventData, ContractABI>): Promise<EventData[]> {
  const blockIntervals = createBlockIntervals(startBlock, endBlock);

  const contract = new Contract(
    contractAddress,
    contractABI as ContractInterface,
    provider
  );

  // Collect the events from on-chain
  const events: Event[] = [];
  for (const [blockIntervalStart, blockIntervalEnd] of blockIntervals) {
    const rawEvents = await contract.queryFilter(
      contract.filters[eventName](...filterArgs),
      blockIntervalStart,
      blockIntervalEnd
    );

    // We only care about events that pass the eventPredicate
    if (eventPredicate) {
      const eventsToKeep = rawEvents.filter((event) => eventPredicate(event));
      events.push(...eventsToKeep);
    } else {
      events.push(...rawEvents);
    }
  }

  // add additional information to each event to create the EventData
  const eventDatas: EventData[] = [];
  for (const event of events) {
    const eventData = await mapEventToEventData(event);
    eventDatas.push(eventData);
  }

  return eventDatas;
}
