import { ChainId } from '@usedapp/core';

type ContractMap = {
    [key: string]: string;
};

type ContractNetworkMap = {
    [key: string]: ContractMap;
};

export const CONTRACTS: ContractNetworkMap = {
    [ChainId.Hardhat]: {
        NerwoCentralizedArbitrator: '0x09D26173Df88aE386b3547a37f0C6b455551077F',
        NerwoEscrow: '0x8bA62e82B338e32a0316a6257c3f658728a3aae0'
    }
};

export const SENDER_WINS = 1;
export const RECEIVER_WINS = 2;
