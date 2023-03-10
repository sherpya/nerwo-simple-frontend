/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface NerwoCentralizedArbitratorInterface extends utils.Interface {
  functions: {
    "appeal(uint256,bytes)": FunctionFragment;
    "appealCost(uint256,bytes)": FunctionFragment;
    "appealPeriod(uint256)": FunctionFragment;
    "arbitrationCost(bytes)": FunctionFragment;
    "changeAppealFee(uint256,uint256)": FunctionFragment;
    "createDispute(uint256,bytes)": FunctionFragment;
    "currentRuling(uint256)": FunctionFragment;
    "disputeStatus(uint256)": FunctionFragment;
    "giveAppealableRuling(uint256,uint256,uint256,uint256)": FunctionFragment;
    "giveRuling(uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setArbitrationPrice(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "appeal"
      | "appealCost"
      | "appealPeriod"
      | "arbitrationCost"
      | "changeAppealFee"
      | "createDispute"
      | "currentRuling"
      | "disputeStatus"
      | "giveAppealableRuling"
      | "giveRuling"
      | "owner"
      | "renounceOwnership"
      | "setArbitrationPrice"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "appeal",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "appealCost",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "appealPeriod",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "arbitrationCost",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeAppealFee",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createDispute",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRuling",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "disputeStatus",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "giveAppealableRuling",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "giveRuling",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setArbitrationPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "appeal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "appealCost", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "appealPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arbitrationCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeAppealFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRuling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "giveAppealableRuling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "giveRuling", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setArbitrationPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AppealDecision(uint256,address)": EventFragment;
    "AppealPossible(uint256,address)": EventFragment;
    "DisputeCreation(uint256,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Ruling(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AppealDecision"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AppealPossible"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisputeCreation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Ruling"): EventFragment;
}

export interface AppealDecisionEventObject {
  _disputeID: BigNumber;
  _arbitrable: string;
}
export type AppealDecisionEvent = TypedEvent<
  [BigNumber, string],
  AppealDecisionEventObject
>;

export type AppealDecisionEventFilter = TypedEventFilter<AppealDecisionEvent>;

export interface AppealPossibleEventObject {
  _disputeID: BigNumber;
  _arbitrable: string;
}
export type AppealPossibleEvent = TypedEvent<
  [BigNumber, string],
  AppealPossibleEventObject
>;

export type AppealPossibleEventFilter = TypedEventFilter<AppealPossibleEvent>;

export interface DisputeCreationEventObject {
  _disputeID: BigNumber;
  _arbitrable: string;
}
export type DisputeCreationEvent = TypedEvent<
  [BigNumber, string],
  DisputeCreationEventObject
>;

export type DisputeCreationEventFilter = TypedEventFilter<DisputeCreationEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RulingEventObject {
  _arbitrable: string;
  _disputeID: BigNumber;
  _ruling: BigNumber;
}
export type RulingEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  RulingEventObject
>;

export type RulingEventFilter = TypedEventFilter<RulingEvent>;

export interface NerwoCentralizedArbitrator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NerwoCentralizedArbitratorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    appeal(
      _disputeID: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    appealCost(
      _disputeID: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    appealPeriod(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

    arbitrationCost(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    changeAppealFee(
      _disputeID: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createDispute(
      _choices: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { ruling: BigNumber }>;

    disputeStatus(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number] & { status: number }>;

    giveAppealableRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      _timeToAppeal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    giveRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setArbitrationPrice(
      _arbitrationPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  appeal(
    _disputeID: PromiseOrValue<BigNumberish>,
    _extraData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  appealCost(
    _disputeID: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  appealPeriod(
    _disputeID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

  arbitrationCost(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeAppealFee(
    _disputeID: PromiseOrValue<BigNumberish>,
    _appealCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createDispute(
    _choices: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentRuling(
    _disputeID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  disputeStatus(
    _disputeID: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  giveAppealableRuling(
    _disputeID: PromiseOrValue<BigNumberish>,
    _ruling: PromiseOrValue<BigNumberish>,
    _appealCost: PromiseOrValue<BigNumberish>,
    _timeToAppeal: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  giveRuling(
    _disputeID: PromiseOrValue<BigNumberish>,
    _ruling: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setArbitrationPrice(
    _arbitrationPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    appeal(
      _disputeID: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    appealCost(
      _disputeID: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    appealPeriod(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { start: BigNumber; end: BigNumber }>;

    arbitrationCost(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeAppealFee(
      _disputeID: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createDispute(
      _choices: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputeStatus(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    giveAppealableRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      _timeToAppeal: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    giveRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setArbitrationPrice(
      _arbitrationPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AppealDecision(uint256,address)"(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): AppealDecisionEventFilter;
    AppealDecision(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): AppealDecisionEventFilter;

    "AppealPossible(uint256,address)"(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): AppealPossibleEventFilter;
    AppealPossible(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): AppealPossibleEventFilter;

    "DisputeCreation(uint256,address)"(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): DisputeCreationEventFilter;
    DisputeCreation(
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _arbitrable?: PromiseOrValue<string> | null
    ): DisputeCreationEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Ruling(address,uint256,uint256)"(
      _arbitrable?: PromiseOrValue<string> | null,
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _ruling?: null
    ): RulingEventFilter;
    Ruling(
      _arbitrable?: PromiseOrValue<string> | null,
      _disputeID?: PromiseOrValue<BigNumberish> | null,
      _ruling?: null
    ): RulingEventFilter;
  };

  estimateGas: {
    appeal(
      _disputeID: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    appealCost(
      _disputeID: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    appealPeriod(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    arbitrationCost(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeAppealFee(
      _disputeID: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createDispute(
      _choices: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disputeStatus(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    giveAppealableRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      _timeToAppeal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    giveRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setArbitrationPrice(
      _arbitrationPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    appeal(
      _disputeID: PromiseOrValue<BigNumberish>,
      _extraData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    appealCost(
      _disputeID: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    appealPeriod(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arbitrationCost(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeAppealFee(
      _disputeID: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createDispute(
      _choices: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disputeStatus(
      _disputeID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    giveAppealableRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      _appealCost: PromiseOrValue<BigNumberish>,
      _timeToAppeal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    giveRuling(
      _disputeID: PromiseOrValue<BigNumberish>,
      _ruling: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setArbitrationPrice(
      _arbitrationPrice: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
