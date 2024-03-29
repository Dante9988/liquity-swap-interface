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
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DexInterface extends ethers.utils.Interface {
  functions: {
    "_prices(uint256)": FunctionFragment;
    "addNewToken(address,uint256)": FunctionFragment;
    "buyToken(address)": FunctionFragment;
    "getPrice(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeToken(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sellToken(address,uint256)": FunctionFragment;
    "supportedTokenAddr(address)": FunctionFragment;
    "tokenPrices(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updatePrice(address,uint256)": FunctionFragment;
    "withdrawEth(uint256)": FunctionFragment;
    "withdrawToken(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_prices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addNewToken",
    values: [string, BigNumberish]
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
  encodeFunctionData(functionFragment: "tokenPrices", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "_prices", data: BytesLike): Result;
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
    functionFragment: "tokenPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePrice",
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
    "PriceUpdated(address,uint256)": EventFragment;
    "RemoveToken(address)": EventFragment;
    "SellToken(address,address,uint256,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddNewToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BuyToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SellToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AddNewTokenEvent = TypedEvent<[string] & { _tokenAddr: string }>;

export type BuyTokenEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    tokenAddr: string;
    account: string;
    amount: BigNumber;
    cost: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, BigNumber] & { depositer: string; amount: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PriceUpdatedEvent = TypedEvent<
  [string, BigNumber] & { tokenAddr: string; price: BigNumber }
>;

export type RemoveTokenEvent = TypedEvent<[string] & { _tokenAddr: string }>;

export type SellTokenEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    tokenAddr: string;
    account: string;
    amount: BigNumber;
    cost: BigNumber;
  }
>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber] & { _tokenAddr: string; amount: BigNumber }
>;

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
    _prices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addNewToken(
      _tokenAddr: string,
      _price: BigNumberish,
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

    tokenPrices(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePrice(
      _tokenAddr: string,
      _price: BigNumberish,
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

  _prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  addNewToken(
    _tokenAddr: string,
    _price: BigNumberish,
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

  tokenPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePrice(
    _tokenAddr: string,
    _price: BigNumberish,
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
    _prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    addNewToken(
      _tokenAddr: string,
      _price: BigNumberish,
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

    tokenPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePrice(
      _tokenAddr: string,
      _price: BigNumberish,
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
    "AddNewToken(address)"(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    AddNewToken(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    "BuyToken(address,address,uint256,uint256)"(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    BuyToken(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    "Deposit(address,uint256)"(
      depositer?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { depositer: string; amount: BigNumber }
    >;

    Deposit(
      depositer?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { depositer: string; amount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "PriceUpdated(address,uint256)"(
      tokenAddr?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenAddr: string; price: BigNumber }
    >;

    PriceUpdated(
      tokenAddr?: null,
      price?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { tokenAddr: string; price: BigNumber }
    >;

    "RemoveToken(address)"(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    RemoveToken(
      _tokenAddr?: null
    ): TypedEventFilter<[string], { _tokenAddr: string }>;

    "SellToken(address,address,uint256,uint256)"(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    SellToken(
      tokenAddr?: null,
      account?: null,
      amount?: null,
      cost?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { tokenAddr: string; account: string; amount: BigNumber; cost: BigNumber }
    >;

    "Withdraw(address,uint256)"(
      _tokenAddr?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _tokenAddr: string; amount: BigNumber }
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
    _prices(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    addNewToken(
      _tokenAddr: string,
      _price: BigNumberish,
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

    tokenPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePrice(
      _tokenAddr: string,
      _price: BigNumberish,
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
    _prices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addNewToken(
      _tokenAddr: string,
      _price: BigNumberish,
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

    tokenPrices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePrice(
      _tokenAddr: string,
      _price: BigNumberish,
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
