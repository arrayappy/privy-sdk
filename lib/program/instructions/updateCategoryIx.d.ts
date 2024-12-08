import { PrivyProgram } from "../idl";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
export declare function updateCategoryIx(program: PrivyProgram, accounts: {
    privyUser: PublicKey;
}, args: {
    encryptedCategories: string;
}): Promise<TransactionInstruction>;
