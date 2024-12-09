/// <reference types="bn.js" />
import { BN, Program } from "@coral-xyz/anchor";
import { Connection, PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";
import { Privy } from "./idl";
type AnchorWallet = {
    publicKey: PublicKey;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: Array<T>): Promise<Array<T>>;
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
};
export default class PrivySdk {
    private connection;
    program: Program<Privy>;
    private authority;
    constructor({ authority, connection, wallet, }: {
        authority: PublicKey;
        connection: Connection;
        wallet: AnchorWallet;
    });
    initializePrivyConfigTx(tokensPerSol: number): Promise<Transaction>;
    updatePrivyConfigTx(newTokensPerSol: number): Promise<Transaction>;
    createUserTx(user: PublicKey, username: string, encryptedCategories: string, depositLamports: BN): Promise<Transaction>;
    updateUsernameTx(privyUser: PublicKey, newUsername: string): Promise<Transaction>;
    addTokensTx(user: PublicKey, privyUser: PublicKey, depositLamports: BN): Promise<Transaction>;
    withdrawBalanceTx(owner: PublicKey, lamports: BN): Promise<Transaction>;
    insertMessageTx(owner: PublicKey, privyUser: PublicKey, encryptedMessage: string): Promise<Transaction>;
    updateCategoryTx(privyUser: PublicKey, encryptedCategories: string): Promise<Transaction>;
    getPrivyConfigPda(): Promise<PublicKey>;
    getPrivyUserPda(user: PublicKey): Promise<PublicKey>;
}
export {};
