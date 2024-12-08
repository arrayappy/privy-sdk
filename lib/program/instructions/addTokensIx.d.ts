import * as anchor from "@coral-xyz/anchor";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function addTokensIx(program: PrivyProgram, accounts: {
    user: PublicKey;
    privyUser: PublicKey;
}, args: {
    depositLamports: anchor.BN;
}, postIxs: TransactionInstruction[]): Promise<TransactionInstruction>;
