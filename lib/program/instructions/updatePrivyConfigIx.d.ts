import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function updatePrivyConfigIx(program: PrivyProgram, accounts: {
    owner: PublicKey;
}, args: {
    newTokensPerSol: number;
}): Promise<TransactionInstruction>;
