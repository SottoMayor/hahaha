import { Signer, SignatureRequest, SignatureResponse, SignTransactionOptions } from "../abstract-signer";
import { Provider, TransactionResponse, UtxoQueryOptions } from "../abstract-provider";
import { AddressOption, Network, UTXO } from "../types";
import { bsv } from "scryptlib/dist";
/**
 * An implemention of a simple wallet which should just be used in dev/test environments.
 * It can hold multiple private keys and have a feature of cachable in-memory utxo management.
 *
 * Reminder: DO NOT USE IT IN PRODUCTION ENV.
 */
export declare class TestWallet extends Signer {
    private readonly _privateKeys;
    private _utxoManagers;
    private splitFeeTx;
    constructor(privateKey: bsv.PrivateKey | bsv.PrivateKey[], provider?: Provider);
    enableSplitFeeTx(on: boolean): void;
    isAuthenticated(): Promise<boolean>;
    requestAuth(): Promise<{
        isAuthenticated: boolean;
        error: string;
    }>;
    get network(): Network;
    get addresses(): string[];
    addPrivateKey(privateKey: bsv.PrivateKey | bsv.PrivateKey[]): this;
    checkPrivateKeys(): bsv.Networks.Network;
    getDefaultAddress(): Promise<bsv.Address>;
    getDefaultPubKey(): Promise<bsv.PublicKey>;
    getPubKey(address: AddressOption): Promise<bsv.PublicKey>;
    signRawTransaction(rawTxHex: string, options: SignTransactionOptions): Promise<string>;
    signTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<bsv.Transaction>;
    signMessage(message: string, address?: AddressOption): Promise<string>;
    getSignatures(rawTxHex: string, sigRequests: SignatureRequest[]): Promise<SignatureResponse[]>;
    connect(provider?: Provider): Promise<this>;
    listUnspent(address: AddressOption, options?: UtxoQueryOptions): Promise<UTXO[]>;
    private _getAddressesIn;
    private _checkAddressOption;
    private get _defaultPrivateKey();
    private _getPrivateKeys;
    signAndsendTransaction(tx: bsv.Transaction, options?: SignTransactionOptions): Promise<TransactionResponse>;
}
