'use client';

import { ChainId, useEthers } from '@usedapp/core';

export const SUPPORTED_NETWORKS = [
    ChainId.Hardhat
];

export default function UseEthersWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const { library } = useEthers();

    if (library?.network) {
        if (SUPPORTED_NETWORKS.includes(library.network.chainId)) {
            return (<>{children}</>);
        }
        return (<div>Unsupported Network TODO switcher</div>);
    }

    return (<div>Connecting...</div>);
}
