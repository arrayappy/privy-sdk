import * as anchor from "@coral-xyz/anchor";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function withdrawBalanceIx(program: PrivyProgram, accounts: {
    owner: PublicKey;
}, args: {
    lamports: anchor.BN;
}): Promise<TransactionInstruction>;
