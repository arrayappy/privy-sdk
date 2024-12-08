import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function insertMessageIx(program: PrivyProgram, accounts: {
    owner: PublicKey;
    privyUser: PublicKey;
}, args: {
    encryptedMessage: string;
}): Promise<TransactionInstruction>;
