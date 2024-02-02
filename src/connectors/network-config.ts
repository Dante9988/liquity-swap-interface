import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const networkId = 102031;

//This RPC URL came from Metamask (nothing sensitive)
export const defaultRPCURL =
  "https://rpc.cc3-testnet.creditcoin.network/";

const providerOptions = {
  injected: {
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        102031: defaultRPCURL,
      },
      pollingInterval: 15000,
      qrcode: true,
      supportedChainIds: [102031]
    },
  },
};

const getWeb3Modal = () => {
  if (typeof window !== "undefined") {
    return new Web3Modal({
      cacheProvider: true,
      providerOptions,
      theme: "dark",
    });
  } else {
    return undefined;
  }
};

export const web3Modal = getWeb3Modal();

type TNetWorkData = {
  chainId: string;
  chainName: string;
  rpcUrls: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: string[];
};

export const getNetworkData = (netId: number): TNetWorkData | undefined => {
  switch (netId) {
    case 102031: {
      return {
        chainId: "0x18E8F",
        chainName: "CC3",
        rpcUrls: [defaultRPCURL],
        nativeCurrency: {
          name: "Ether",
          symbol: "tCTC",
          decimals: 18,
        },
        blockExplorerUrls: ["https://creditcoin-testnet.blockscout.com/"],
      };
    }
    default:
      return undefined;
  }
};