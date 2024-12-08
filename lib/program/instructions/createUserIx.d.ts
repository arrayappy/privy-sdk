import * as anchor from "@coral-xyz/anchor";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function createUserIx(program: PrivyProgram, accounts: {
    user: PublicKey;
}, args: {
    username: string;
    encryptedCategories: string;
    depositLamports: anchor.BN;
}, postIxs: TransactionInstruction[]): Promise<TransactionInstruction>;
