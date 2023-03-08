'use client';

import 'bulma/css/bulma.css';

import Escrow from './components/Escrow';
import UseEthersWrapper from './components/UseEthersWrapper';

export default function Home() {
  return (
    <main className="main">
      <UseEthersWrapper>
        <Escrow />
      </UseEthersWrapper>
    </main>
  );
}
