/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  NerwoCentralizedArbitrator,
  NerwoCentralizedArbitratorInterface,
} from "../NerwoCentralizedArbitrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_arbitrationPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AppealPeriodExpired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
    ],
    name: "InsufficientFunding",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRuling",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "InvalidStatus",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IArbitrable",
        name: "_arbitrable",
        type: "address",
      },
    ],
    name: "AppealDecision",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IArbitrable",
        name: "_arbitrable",
        type: "address",
      },
    ],
    name: "AppealPossible",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "contract IArbitrable",
        name: "_arbitrable",
        type: "address",
      },
    ],
    name: "DisputeCreation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IArbitrable",
        name: "_arbitrable",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_ruling",
        type: "uint256",
      },
    ],
    name: "Ruling",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "appeal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "appealCost",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
    ],
    name: "appealPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "arbitrationCost",
    outputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_appealCost",
        type: "uint256",
      },
    ],
    name: "changeAppealFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_choices",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "createDispute",
    outputs: [
      {
        internalType: "uint256",
        name: "disputeID",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
    ],
    name: "currentRuling",
    outputs: [
      {
        internalType: "uint256",
        name: "ruling",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
    ],
    name: "disputeStatus",
    outputs: [
      {
        internalType: "enum NerwoCentralizedArbitrator.DisputeStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ruling",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_appealCost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeToAppeal",
        type: "uint256",
      },
    ],
    name: "giveAppealableRuling",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_disputeID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ruling",
        type: "uint256",
      },
    ],
    name: "giveRuling",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_arbitrationPrice",
        type: "uint256",
      },
    ],
    name: "setArbitrationPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161103c38038061103c83398101604081905261002f916100a1565b61003833610051565b60018055600281905561004a82610051565b50506100db565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100b457600080fd5b82516001600160a01b03811681146100cb57600080fd5b6020939093015192949293505050565b610f52806100ea6000396000f3fe6080604052600436106100dd5760003560e01c8063afe15cfb1161007f578063f23f16e611610059578063f23f16e614610240578063f2fde38b14610260578063f7434ea914610280578063ffb43c48146102a057600080fd5b8063afe15cfb146101d8578063c13517e11461020d578063c97c4d5c1461022057600080fd5b806349912f88116100bb57806349912f8814610168578063715018a61461017b57806378e5effc146101905780638da5cb5b146101b057600080fd5b80630688eef9146100e257806310f169e8146101045780631c3db16d1461013a575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610cba565b6102c0565b005b34801561011057600080fd5b5061012461011f366004610cdc565b610342565b6040516101319190610d0b565b60405180910390f35b34801561014657600080fd5b5061015a610155366004610cdc565b610409565b604051908152602001610131565b610102610176366004610d7c565b61043f565b34801561018757600080fd5b5061010261054f565b34801561019c57600080fd5b506101026101ab366004610dc8565b610563565b3480156101bc57600080fd5b506000546040516001600160a01b039091168152602001610131565b3480156101e457600080fd5b506101f86101f3366004610cdc565b6106b9565b60408051928352602083019190915201610131565b61015a61021b366004610d7c565b610702565b34801561022c57600080fd5b5061010261023b366004610cba565b61089c565b34801561024c57600080fd5b5061015a61025b366004610d7c565b6109ca565b34801561026c57600080fd5b5061010261027b366004610dfa565b610a34565b34801561028c57600080fd5b5061015a61029b366004610e23565b610aad565b3480156102ac57600080fd5b506101026102bb366004610cdc565b610ab7565b6102c8610ac4565b6000600383815481106102dd576102dd610e65565b60009182526020909120600390910201905060018154600160a01b900460ff16600281111561030e5761030e610cf5565b1461033b5760015b604051631961fd9360e11b815260040161033291815260200190565b60405180910390fd5b6002015550565b6000806003838154811061035857610358610e65565b60009182526020909120600390910201905060016003848154811061037f5761037f610e65565b6000918252602090912060039091020154600160a01b900460ff1660028111156103ab576103ab610cf5565b1480156103c657508054600160d81b900463ffffffff164210155b156103d45750600292915050565b600383815481106103e7576103e7610e65565b6000918252602090912060039091020154600160a01b900460ff169392505050565b60006003828154811061041e5761041e610e65565b6000918252602090912060039091020154600160b01b900460ff1692915050565b828282600061044f8484846109ca565b905080341461047457604051638269426160e01b815260048101829052602401610332565b60006003888154811061048957610489610e65565b60009182526020909120600390910201905060018154600160a01b900460ff1660028111156104ba576104ba610cf5565b146104c6576001610316565b8054600160d81b900463ffffffff1642106104f457604051630eb66cf360e01b815260040160405180910390fd5b348160010160008282546105089190610e91565b9091555050805460ff60a01b19168155604051339089907f9c9b64db9e130f48381bf697abf638e73117dbfbfd7a4484f2da3ba188f4187d90600090a35050505050505050565b610557610ac4565b6105616000610b1e565b565b61056b610ac4565b60006003858154811061058057610580610e65565b600091825260209091206003909102018054909150600160a81b900460ff168411156105bf576040516309efd47960e41b815260040160405180910390fd5b60008154600160a01b900460ff1660028111156105de576105de610cf5565b146105ea576000610316565b426105f485610b6e565b82546002840186905560ff91909116600160b01b0260ff60a01b191662ff00ff60a01b1990911617600160a01b1763ffffffff60b81b1916600160b81b63ffffffff831690810291909117835561065590610650908590610e91565b610bd3565b825463ffffffff91909116600160d81b0263ffffffff60d81b198216811784556040516001600160a01b0391821691909216179087907fa5d41b970d849372be1da1481ffd78d162bfe57a7aa2fe4e5fb73481fa5ac24f90600090a3505050505050565b6000806000600384815481106106d1576106d1610e65565b600091825260209091206003909102015463ffffffff600160b81b8204811696600160d81b90920416945092505050565b600060036040518061010001604052806107193390565b6001600160a01b031681526020016000815260200161073787610b6e565b60ff16815260006020808301829052604083018290526060830182905234608084015260a09092018190528354600181018555938152819020825160039094020180546001600160a01b039094166001600160a01b031985168117825591830151929390929183916001600160a81b03191617600160a01b8360028111156107c1576107c1610cf5565b0217905550604082015181546060840151608085015160a086015161ffff60a81b19909316600160a81b60ff9586160260ff60b01b191617600160b01b94909216939093021767ffffffffffffffff60b81b1916600160b81b63ffffffff9384160263ffffffff60d81b191617600160d81b929091169190910217815560c082015160018083019190915560e0909201516002909101556003546108659190610ea4565b604051909150339082907f141dfc18aa6a56fc816f44f0e9e2f1ebc92b15ab167770e17db5b084c10ed99590600090a39392505050565b6108a4610ac4565b6000600383815481106108b9576108b9610e65565b60009182526020822060039091020191508154600160a01b900460ff1660028111156108e7576108e7610cf5565b146108f3576000610316565b8054600160a81b900460ff1682111561091f576040516309efd47960e41b815260040160405180910390fd5b61092882610b6e565b815460ff91909116600160b01b0260ff60a01b191662ff00ff60a01b1990911617600160a11b1781556001810154610961903390610c38565b805460405163188d362b60e11b815260048101859052602481018490526001600160a01b039091169063311a6c5690604401600060405180830381600087803b1580156109ad57600080fd5b505af11580156109c1573d6000803e3d6000fd5b50505050505050565b600080600385815481106109e0576109e0610e65565b60009182526020909120600390910201905060018154600160a01b900460ff166002811115610a1157610a11610cf5565b03610a2157600201549050610a2d565b6001600160ff1b039150505b9392505050565b610a3c610ac4565b6001600160a01b038116610aa15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610332565b610aaa81610b1e565b50565b6002545b92915050565b610abf610ac4565b600255565b6000546001600160a01b031633146105615760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610332565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060ff821115610bcf5760405162461bcd60e51b815260206004820152602560248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2038604482015264206269747360d81b6064820152608401610332565b5090565b600063ffffffff821115610bcf5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610332565b600080836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610c86576040519150601f19603f3d011682016040523d82523d6000602084013e610c8b565b606091505b509150915081610cb457838382604051636a67a47f60e01b815260040161033293929190610eb7565b50505050565b60008060408385031215610ccd57600080fd5b50508035926020909101359150565b600060208284031215610cee57600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b6020810160038310610d2d57634e487b7160e01b600052602160045260246000fd5b91905290565b60008083601f840112610d4557600080fd5b50813567ffffffffffffffff811115610d5d57600080fd5b602083019150836020828501011115610d7557600080fd5b9250929050565b600080600060408486031215610d9157600080fd5b83359250602084013567ffffffffffffffff811115610daf57600080fd5b610dbb86828701610d33565b9497909650939450505050565b60008060008060808587031215610dde57600080fd5b5050823594602084013594506040840135936060013592509050565b600060208284031215610e0c57600080fd5b81356001600160a01b0381168114610a2d57600080fd5b60008060208385031215610e3657600080fd5b823567ffffffffffffffff811115610e4d57600080fd5b610e5985828601610d33565b90969095509350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115610ab157610ab1610e7b565b81810381811115610ab157610ab1610e7b565b60018060a01b038416815260006020848184015260606040840152835180606085015260005b81811015610ef957858101830151858201608001528201610edd565b506000608082860101526080601f19601f8301168501019250505094935050505056fea2646970667358221220d7b447a441feafa156d1384cd8f3a1c062baf0b7d9fc318a6cd588b0b2f855e464736f6c63430008130033";

type NerwoCentralizedArbitratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NerwoCentralizedArbitratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NerwoCentralizedArbitrator__factory extends ContractFactory {
  constructor(...args: NerwoCentralizedArbitratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _arbitrationPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NerwoCentralizedArbitrator> {
    return super.deploy(
      _owner,
      _arbitrationPrice,
      overrides || {}
    ) as Promise<NerwoCentralizedArbitrator>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _arbitrationPrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _arbitrationPrice,
      overrides || {}
    );
  }
  override attach(address: string): NerwoCentralizedArbitrator {
    return super.attach(address) as NerwoCentralizedArbitrator;
  }
  override connect(signer: Signer): NerwoCentralizedArbitrator__factory {
    return super.connect(signer) as NerwoCentralizedArbitrator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NerwoCentralizedArbitratorInterface {
    return new utils.Interface(_abi) as NerwoCentralizedArbitratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NerwoCentralizedArbitrator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NerwoCentralizedArbitrator;
  }
}