import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function updateUsernameIx(program: PrivyProgram, accounts: {
    privyUser: PublicKey;
}, args: {
    newUsername: string;
}): Promise<TransactionInstruction>;
