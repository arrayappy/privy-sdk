import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { PrivyProgram } from "../idl";
export declare function allocateSpaceIx(program: PrivyProgram, user: PublicKey, privyUserPDA: PublicKey, space: number, count: number): Promise<TransactionInstruction[]>;
