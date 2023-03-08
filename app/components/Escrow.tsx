'use client';

import { BigNumber, ethers } from 'ethers';
import { useState } from 'react';
import { useContractFunction, useEthers } from '@usedapp/core';

import { SENDER_WINS, RECEIVER_WINS } from '@/app/common';
import { getNerwoContracts } from '@/app/contracts';

import { TypedEventFilter, TypedEvent } from '@/gen/types/common';
import { DisputeEvent, RulingEvent, TransactionCreatedEvent } from '@/gen/types/NerwoEscrow';


export default function Escrow() {
    const { account, library } = useEthers();

    const { nerwoCentralizerArbitrator, nerwoEscrow } = getNerwoContracts(library!);

    const [transactionID, setTrasactionID] = useState<BigNumber | null>(null);
    const [disputeID, setDisputeID] = useState<BigNumber | null>(null);
    const [hasToPayFee, setHasToPayFee] = useState(false);
    const [ruling, setRuling] = useState<BigNumber | null>(null);

    const getEvent = async <T extends TypedEventFilter<TypedEvent>>(
        result: ethers.providers.TransactionReceipt | undefined, filter: T) => {
        const events = await nerwoEscrow.queryFilter(
            filter,
            result?.blockNumber,
            result?.blockNumber);
        return events?.at(-1);
    };

    const { state: { errorMessage }, send: _createTransaction } = useContractFunction(nerwoEscrow, 'createTransaction', {
        transactionName: 'createTransaction'
    });

    const createTransaction = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const timeoutPayment = parseInt(formData.get('timeoutPayment')!.toString(), 10);
        const receiver = formData.get('receiver')!.toString();
        const amount = ethers.utils.parseEther(formData.get('amount')!.toString());

        try {
            const result = await _createTransaction(
                timeoutPayment, receiver, 'evidence', {
                from: account, value: amount
            });

            const event: TransactionCreatedEvent = (await getEvent(result, nerwoEscrow.filters.TransactionCreated()))!;

            if (!event) {
                console.log(`No creation events ${errorMessage}`);
                return;
            }

            setTrasactionID(event.args._transactionID);
        } catch (error: any) {
            console.error(error);
        }
    };

    const { send: _payArbitrationFeeByReceiver } = useContractFunction(nerwoEscrow, 'payArbitrationFeeByReceiver', {
        transactionName: 'payArbitrationFeeByReceiver'
    });

    const payArbitrationFeeByReceiver = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const amount = await nerwoCentralizerArbitrator.arbitrationCost([]);

        try {
            const result = await _payArbitrationFeeByReceiver(
                transactionID!, { from: account, value: amount });

            const _hasToPayFee = await getEvent(result, nerwoEscrow.filters.HasToPayFee()) !== undefined;
            setHasToPayFee(_hasToPayFee);

            const event: DisputeEvent = (await getEvent(result, nerwoEscrow.filters.Dispute()))!;
            setDisputeID(event?.args._disputeID ?? null);
        } catch (error: any) {
            console.error(error);
        }
    };

    const { send: _payArbitrationFeeBySender } = useContractFunction(nerwoEscrow, 'payArbitrationFeeBySender', {
        transactionName: 'payArbitrationFeeBySender'
    });

    const payArbitrationFeeBySender = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const amount = await nerwoCentralizerArbitrator.arbitrationCost([]);

        try {
            const result = await _payArbitrationFeeBySender(
                transactionID!, { from: account, value: amount });

            const _hasToPayFee = await getEvent(result, nerwoEscrow.filters.HasToPayFee()) !== undefined;
            setHasToPayFee(_hasToPayFee);

            const event: DisputeEvent = (await getEvent(result, nerwoEscrow.filters.Dispute()))!;
            setDisputeID(event?.args._disputeID ?? null);
        } catch (error: any) {
            console.error(error);
        }
    };

    const { send: _giveRuling } = useContractFunction(nerwoCentralizerArbitrator, 'giveRuling', {
        transactionName: 'giveRuling'
    });

    const giveRuling = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const ruling = parseInt(formData.get('ruling')!.toString());

        try {
            const result = await _giveRuling(
                disputeID!,
                ruling, { from: account });

            const event: RulingEvent = (await getEvent(result, nerwoCentralizerArbitrator.filters.Ruling()))!;
            setRuling(event?.args._ruling ?? null);
        } catch (error: any) {
            console.error(error);
        }
    };

    return (
        <div>
            {!transactionID &&
                <div>
                    <form onSubmit={createTransaction}>
                        <div className="field">
                            <label htmlFor="timeoutPayment">Timeout Payment</label>
                            <input className="input" type="text" id="timeoutPayment" name="timeoutPayment" />
                        </div>

                        <div className="field">
                            <label htmlFor="receiver">Receiver:</label>
                            <input className="input" type="text" id="receiver" name="receiver" />
                        </div>

                        <div className="field">
                            <label htmlFor="amount">Amount:</label>
                            <input className="input" type="text" id="amount" name="amount" />
                        </div>

                        <button className="button is-primary" type="submit">Submit</button>
                    </form>
                </div>
            }
            {transactionID && !disputeID && !hasToPayFee &&
                <div>
                    <form onSubmit={payArbitrationFeeByReceiver}>
                        <button className="button is-primary" type="submit">payArbitrationFeeByReceiver</button>
                    </form>
                </div>
            }
            {transactionID && !disputeID && hasToPayFee &&
                <div>
                    <form onSubmit={payArbitrationFeeBySender}>
                        <button className="button is-primary" type="submit">payArbitrationFeeBySender</button>
                    </form>
                </div>
            }
            {disputeID && !ruling &&
                <div>
                    <div className="button">Dispute ID: {disputeID?.toString()}</div>
                    <form onSubmit={giveRuling}>
                        <div className="select">
                            <select id="ruling" name="ruling">
                                <option value={SENDER_WINS}>Sender Wins</option>
                                <option value={RECEIVER_WINS}>Receiver Wins</option>
                            </select>
                        </div>
                        <button className="button is-primary" type="submit">giveRuling</button>
                    </form>
                </div>
            }
            {ruling && <div>Ruling {ruling.toString()}</div>}
        </div >
    );
}
