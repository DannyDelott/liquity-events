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
  mapEventToEventData: (
    currentEvent: Event,
    existingEventInfos: EventData[]
  ) => Promise<EventData>;
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
  console.log(
    `${eventName}: ${events.length} events (startBlock #${startBlock}, endBlock #${endBlock})`
  );

  // add additional information to each event to create the EventData
  const eventDatas: EventData[] = [];
  let counter = 1;
  for (const event of events) {
    console.log(`${eventName}: ${counter} of ${events.length}`);
    const eventData = await mapEventToEventData(event, eventDatas);
    eventDatas.push(eventData);
    counter++;
  }

  return eventDatas;
}
