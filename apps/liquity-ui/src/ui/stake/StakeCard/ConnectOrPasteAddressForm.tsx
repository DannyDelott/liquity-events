import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import { ConnectButton } from "src/ui/wallet/ConnectButton";

export function ConnectOrPasteAddressForm(): ReactElement {
  const router = useRouter();
  const { pathname, replace } = router;
  const [searchString, setSearchString] = useState("");
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="flex flex-col justify-center items-center gap-2">
        <span>Look up an Ethereum address</span>
        <div className="daisy-input-group">
          <input
            type="text"
            placeholder="Enter an address or ENS name…"
            className="daisy-input daisy-input-bordered w-full"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button
            className="daisy-btn daisy-btn-square daisy-btn-primary daisy-btn-outline"
            onClick={() => {
              console.log('setting it from form click');
              replace({ query: { account: searchString } });
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
      <div className="daisy-divider">OR</div>
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        <ConnectButton />
      </div>
    </div>
  );
}
