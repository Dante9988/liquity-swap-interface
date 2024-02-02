import { ERC20, ERC20__factory, Dex, Dex__factory } from "./abis/types";
import { TSignerProvider } from "../connectors";
import { checkSigner } from "../interactions/connectwallet";

export type TokenType = "Dai" | "Link" | "Uni";

export const daiAddr = "0x67956D9bdA07C65B8a0F2b1a5DB619E64DFA8dc0";
export const linkAddr = "0x64e6321f4E1d8fB7cA989c92cA2ac87B9282f451";
export const uniAddr = "0xF76b3D7EA97F468B322b6234963d077e069F3395";
export const dexAddr = "0x8a21405Ed360fE38D5179Ea5A265E4AA3db4F24C";

export const getTokenAddr = (tokenType: TokenType): string => {
  switch (tokenType) {
    case "Dai":
      return daiAddr;
    case "Link":
      return linkAddr
    case "Uni":
      return uniAddr
  }
}

export const getTokenInstance = async (
  signerOrProvider: TSignerProvider,
  token: TokenType
): Promise<ERC20> => {
  await checkSigner(signerOrProvider);
  const tokenAddr = getTokenAddr(token);
  return ERC20__factory.connect(tokenAddr, signerOrProvider);
};

export const getDexInstance = async (
  signerOrProvider: TSignerProvider
): Promise<Dex> => {
  await checkSigner(signerOrProvider);
  return Dex__factory.connect(dexAddr, signerOrProvider);
};