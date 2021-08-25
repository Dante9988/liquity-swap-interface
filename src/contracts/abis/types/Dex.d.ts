/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DexInterface extends ethers.utils.Interface {
  functions: {
    "addNewToken(address,address)": FunctionFragment;
    "buyToken(address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sellToken(address,uint256)": FunctionFragment;
    "supportedTokenAddr(address)": FunctionFragment;
    "tokenToPriceAddr(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawEth(uint256)": FunctionFragment;
    "withdrawToken(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addNewToken",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "buyToken", values: [string]): string;
  encodeFunctionData(functionFragment: "getPrice", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sellToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokenAddr",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToPriceAddr",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addNewToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokenAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToPriceAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "AddNewToken(address)": EventFragment;
    "BuyToken(address,address,uint256,uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RemoveToken(address)": EventFragment;
    "SellToken(address,address,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddNewToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SellToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class Dex extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DexInterface;

  functions: {
    addNewToken(
      _tokenAddr: string,
      _tokenPriceAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyToken(
      _tokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPrice(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sellToken(
      _tokenAddr: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedTokenAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenToPriceAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      _tokenAddr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addNewToken(
    _tokenAddr: string,
    _tokenPriceAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyToken(
    _tokenAddr: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPrice(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeToken(
    _tokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sellToken(
    _tokenAddr: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedTokenAddr(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  tokenToPriceAddr(arg0: string, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawEth(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    _tokenAddr: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addNewToken(
      _tokenAddr: string,
      _tokenPriceAddr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    buyToken(_tokenAddr: string, overrides?: CallOverrides): Promise<void>;

    getPrice(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeToken(_tokenAddr: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sellToken(
      _tokenAddr: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportedTokenAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenToPriceAddr(arg0: string, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEth(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      _tokenAddr: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AddNewToken(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    BuyToken(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    Deposit(
      depositer?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { depositer: string; amount: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    RemoveToken(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    SellToken(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    Withdraw(
      _tokenAddr?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _tokenAddr: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    addNewToken(
      _tokenAddr: string,
      _tokenPriceAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyToken(
      _tokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPrice(_tokenAddr: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sellToken(
      _tokenAddr: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedTokenAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenToPriceAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      _tokenAddr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addNewToken(
      _tokenAddr: string,
      _tokenPriceAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyToken(
      _tokenAddr: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPrice(
      _tokenAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sellToken(
      _tokenAddr: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedTokenAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenToPriceAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      _tokenAddr: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
