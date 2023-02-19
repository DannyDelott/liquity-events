import { ConnectButton as ConnectButtonFromRainbowKit } from "@rainbow-me/rainbowkit";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
export function ConnectButton() {
  return (
    <ConnectButtonFromRainbowKit.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        if (!connected) {
          return (
            <button
              onClick={openConnectModal}
              type="button"
              className="daisy-btn daisy-btn-ghost text-lg"
            >
              Connect Wallet
            </button>
          );
        }

        return (
          <button
            onClick={openAccountModal}
            type="button"
            className="daisy-btn daisy-btn-ghost gap-1.5 text-lg normal-case"
          >
            <Jazzicon
              diameter={28}
              seed={jsNumberForAddress(account.address)}
            />
            {account.displayName}
          </button>
        );
      }}
    </ConnectButtonFromRainbowKit.Custom>
  );
}
