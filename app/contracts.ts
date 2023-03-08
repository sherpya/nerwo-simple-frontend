import { JsonRpcProvider, FallbackProvider } from '@ethersproject/providers';

import { CONTRACTS } from '@/app/common';
import { NerwoCentralizedArbitrator__factory } from '@/gen/types/factories/NerwoCentralizedArbitrator__factory';
import { NerwoEscrow__factory } from '@/gen/types/factories/NerwoEscrow__factory';


export function getNerwoContracts(provider: JsonRpcProvider | FallbackProvider) {
  const chainId = provider?.network?.chainId ?? 0;

  if (!chainId) {
    throw new Error('Invalid chainId');
  }

  const contracts = CONTRACTS[chainId];
  const nerwoCentralizerArbitrator = NerwoCentralizedArbitrator__factory
    .connect(contracts.NerwoCentralizedArbitrator, provider);
  const nerwoEscrow = NerwoEscrow__factory.connect(contracts.NerwoEscrow, provider);

  // make sure they are our contracts
  nerwoEscrow.owner().then((owner) => {
    // console.log(`NerwoEscrow owner is ${owner}`);
  });

  nerwoCentralizerArbitrator.owner().then((owner) => {
    // console.log(`NerwoCentralizedArbitrator owner is ${owner}`);
  });

  return { nerwoCentralizerArbitrator, nerwoEscrow };
}
