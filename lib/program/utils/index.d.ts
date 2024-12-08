import { Transaction, TransactionInstruction } from "@solana/web3.js";
declare function ixToTx(ix: TransactionInstruction): Transaction;
declare function ixsToTx(ixs: Array<TransactionInstruction>): Transaction;
export { ixToTx, ixsToTx };
