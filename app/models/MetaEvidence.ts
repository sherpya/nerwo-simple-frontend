export interface Token {
    name: string;
    ticker: string;
    symbolURI: string;
    address?: any;
    decimals: number;
}

export type ExtraData = Map<string, string>;
export type Aliases = Map<string, string>;

export interface RulingOptions {
    type: string;
    titles: string[];
    descriptions: string[];
}

export interface MetaEvidence {
    subCategory: string;
    arbitrableAddress: string;
    title: string;
    description: string;
    sender: string;
    receiver: string;
    amount: string;
    timeout: number;
    token: Token;
    extraData: ExtraData;
    invoice: boolean;
    category: string;
    question: string;
    rulingOptions: RulingOptions;
    evidenceDisplayInterfaceURI: string;
    aliases: Aliases;
}
