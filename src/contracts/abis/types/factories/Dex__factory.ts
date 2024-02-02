/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Dex, DexInterface } from "../Dex";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokenAddr",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "AddNewToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "BuyToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "depositer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "RemoveToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "SellToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_prices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "addNewToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "removeToken",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supportedTokenAddr",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e0604052670de0b6b3a76400006080908152675a34a38fc00a000060a05267ebec21ee1da4000060c05262000039906003908162000298565b503480156200004757600080fd5b50604051620013b1380380620013b18339810160408190526200006a9162000327565b620000753362000248565b600354815114620000cc5760405162461bcd60e51b815260206004820152601660248201527f4465783a204d69736d6174636865642061727261797300000000000000000000604482015260640160405180910390fd5b60005b815181101562000240576001806000848481518110620000ff57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff021916908315150217905550600381815481106200016057634e487b7160e01b600052603260045260246000fd5b9060005260206000200154600260008484815181106200019057634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b03168152602001908152602001600020819055507f42fb71c04e6650a34983ed55f09500bef00b288f2152356b1857630026235f12828281518110620001fe57634e487b7160e01b600052603260045260246000fd5b60200260200101516040516200022391906001600160a01b0391909116815260200190565b60405180910390a1806200023781620003fb565b915050620000cf565b505062000439565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002e1579160200282015b82811115620002e157825182906001600160401b0316905591602001919060010190620002b9565b50620002ef929150620002f3565b5090565b5b80821115620002ef5760008155600101620002f4565b80516001600160a01b03811681146200032257600080fd5b919050565b600060208083850312156200033a578182fd5b82516001600160401b038082111562000351578384fd5b818501915085601f83011262000365578384fd5b8151818111156200037a576200037a62000423565b8060051b604051601f19603f83011681018181108582111715620003a257620003a262000423565b604052828152858101935084860182860187018a1015620003c1578788fd5b8795505b83861015620003ee57620003d9816200030a565b855260019590950194938601938601620003c5565b5098975050505050505050565b60006000198214156200041c57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b610f6880620004496000396000f3fe6080604052600436106100e15760003560e01c80637e72fb521161007f578063c311d04911610059578063c311d04914610297578063f2fde38b146102b7578063f464e7db146102d7578063fe776dd0146102f757600080fd5b80637e72fb521461023c5780638da5cb5b1461024f5780639e281a981461027757600080fd5b806341976e09116100bb57806341976e09146101c7578063457972de146101e75780635fa7b58414610207578063715018a61461022757600080fd5b806308cca7ea14610125578063096db4d614610147578063204120bc1461018c57600080fd5b3661012057604080513381523460208201527fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c910160405180910390a1005b600080fd5b34801561013157600080fd5b50610145610140366004610e39565b610317565b005b34801561015357600080fd5b50610177610162366004610e18565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561019857600080fd5b506101b96101a7366004610e18565b60026020526000908152604090205481565b604051908152602001610183565b3480156101d357600080fd5b506101b96101e2366004610e18565b6103ff565b3480156101f357600080fd5b50610145610202366004610e39565b61045d565b34801561021357600080fd5b50610145610222366004610e18565b610500565b34801561023357600080fd5b506101456105a5565b61014561024a366004610e18565b6105b9565b34801561025b57600080fd5b506000546040516001600160a01b039091168152602001610183565b34801561028357600080fd5b50610145610292366004610e39565b610801565b3480156102a357600080fd5b506101456102b2366004610e82565b610916565b3480156102c357600080fd5b506101456102d2366004610e18565b610a3d565b3480156102e357600080fd5b506101456102f2366004610e39565b610ab6565b34801561030357600080fd5b506101b9610312366004610e82565b610d31565b61031f610d52565b6001600160a01b03821660009081526001602052604090205460ff16156103995760405162461bcd60e51b8152602060048201526024808201527f4465783a205468697320746f6b656e20697320616c726561647920737570706f6044820152631c9d195960e21b60648201526084015b60405180910390fd5b6001600160a01b0382166000818152600160208181526040808420805460ff19169093179092556002815291819020849055519182527f42fb71c04e6650a34983ed55f09500bef00b288f2152356b1857630026235f1291015b60405180910390a15050565b6001600160a01b0381166000908152600160208190526040822054839160ff9091161515146104405760405162461bcd60e51b815260040161039090610eb2565b50506001600160a01b031660009081526002602052604090205490565b610465610d52565b6001600160a01b038216600090815260016020819052604090912054839160ff9091161515146104a75760405162461bcd60e51b815260040161039090610eb2565b6001600160a01b038316600081815260026020908152604091829020859055815192835282018490527f0d86730737b142fc160892fa8a0f2db687a92a0e294d1ad70624cf5acef03b84910160405180910390a1505050565b610508610d52565b6001600160a01b038116600090815260016020819052604090912054829160ff90911615151461054a5760405162461bcd60e51b815260040161039090610eb2565b6001600160a01b0382166000818152600160209081526040808320805460ff19169055600282528083209290925590519182527f4eb129c82dcd3eedb52df2b0e6fb4cfa41ac64ee9d63ff081acbb1877e85d79b91016103f3565b6105ad610d52565b6105b76000610dac565b565b6001600160a01b038116600090815260016020819052604090912054829160ff9091161515146105fb5760405162461bcd60e51b815260040161039090610eb2565b816000610607826103ff565b90508061064b5760405162461bcd60e51b815260206004820152601260248201527111195e0e88141c9a58d9481b9bdd081cd95d60721b6044820152606401610390565b60008161066034670de0b6b3a7640000610f07565b61066a9190610ee7565b6040516370a0823160e01b815230600482015290915081906001600160a01b038516906370a082319060240160206040518083038186803b1580156106ae57600080fd5b505afa1580156106c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e69190610e9a565b101561072a5760405162461bcd60e51b815260206004820152601360248201527211195e0e88151bdad95b881cdbdb19081bdd5d606a1b6044820152606401610390565b60405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0384169063a9059cbb90604401602060405180830381600087803b15801561077257600080fd5b505af1158015610786573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107aa9190610e62565b50604080516001600160a01b03871681523360208201529081018290523460608201527facf531ec465d633652ed6f0179042e0f5105d16b2eb45652517eb8f96e3d19979060800160405180910390a15050505050565b610809610d52565b6001600160a01b038216600090815260016020819052604090912054839160ff90911615151461084b5760405162461bcd60e51b815260040161039090610eb2565b60405163a9059cbb60e01b81523360048201526024810183905283906001600160a01b0382169063a9059cbb90604401602060405180830381600087803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cd9190610e62565b50604080516001600160a01b0386168152602081018590527f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364910160405180910390a150505050565b61091e610d52565b8047101561096e5760405162461bcd60e51b815260206004820152601d60248201527f4465783a20496e73756666696369656e74204574682062616c616e63650000006044820152606401610390565b604051600090339083908381818185875af1925050503d80600081146109b0576040519150601f19603f3d011682016040523d82523d6000602084013e6109b5565b606091505b5050905080610a065760405162461bcd60e51b815260206004820152601f60248201527f4465783a20455448207472616e7366657220756e7375636365737366756c21006044820152606401610390565b6040805160008152602081018490527f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436491016103f3565b610a45610d52565b6001600160a01b038116610aaa5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610390565b610ab381610dac565b50565b6001600160a01b038216600090815260016020819052604090912054839160ff909116151514610af85760405162461bcd60e51b815260040161039090610eb2565b826000610b04826103ff565b905080610b485760405162461bcd60e51b815260206004820152601260248201527111195e0e88141c9a58d9481b9bdd081cd95d60721b6044820152606401610390565b6000670de0b6b3a7640000610b5d8387610f07565b610b679190610ee7565b905080471015610bb95760405162461bcd60e51b815260206004820152601d60248201527f4465783a2043616e6e6f74206166666f7264207468697320746f6b656e0000006044820152606401610390565b6040516323b872dd60e01b8152336004820152306024820152604481018690526001600160a01b038416906323b872dd90606401602060405180830381600087803b158015610c0757600080fd5b505af1158015610c1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3f9190610e62565b50604051600090339083908381818185875af1925050503d8060008114610c82576040519150601f19603f3d011682016040523d82523d6000602084013e610c87565b606091505b5050905080610cd85760405162461bcd60e51b815260206004820152601f60248201527f4465783a20455448207472616e7366657220756e7375636365737366756c21006044820152606401610390565b604080516001600160a01b0389168152336020820152908101839052606081018790527fbbcd6525e9abb18370c96747b5bdabcbfb595afb38cb853a1ed34b210ad437c69060800160405180910390a150505050505050565b60038181548110610d4157600080fd5b600091825260209091200154905081565b6000546001600160a01b031633146105b75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610e1357600080fd5b919050565b600060208284031215610e29578081fd5b610e3282610dfc565b9392505050565b60008060408385031215610e4b578081fd5b610e5483610dfc565b946020939093013593505050565b600060208284031215610e73578081fd5b81518015158114610e32578182fd5b600060208284031215610e93578081fd5b5035919050565b600060208284031215610eab578081fd5b5051919050565b6020808252818101527f4465783a205468697320746f6b656e206973206e6f7420737570706f72746564604082015260600190565b600082610f0257634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610f2d57634e487b7160e01b81526011600452602481fd5b50029056fea2646970667358221220f17c1779708c77b44366fd87f6852c1eeb4a7bf8b5144f25fdfe70bc838ea42f64736f6c63430008040033";

export class Dex__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _tokenAddr: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Dex> {
    return super.deploy(_tokenAddr, overrides || {}) as Promise<Dex>;
  }
  getDeployTransaction(
    _tokenAddr: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenAddr, overrides || {});
  }
  attach(address: string): Dex {
    return super.attach(address) as Dex;
  }
  connect(signer: Signer): Dex__factory {
    return super.connect(signer) as Dex__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DexInterface {
    return new utils.Interface(_abi) as DexInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dex {
    return new Contract(address, _abi, signerOrProvider) as Dex;
  }
}
