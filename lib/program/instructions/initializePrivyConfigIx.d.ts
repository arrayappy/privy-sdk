import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function initializePrivyConfigIx(program: PrivyProgram, accounts: {
    owner: PublicKey;
}, args: {
    tokensPerSol: number;
}): Promise<TransactionInstruction>;
