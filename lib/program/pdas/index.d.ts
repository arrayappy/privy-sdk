import { PublicKey } from "@solana/web3.js";
export declare function getPrivyConfigPda(programId: PublicKey): PublicKey;
export declare function getPrivyUserPda(programId: PublicKey, walletAddress: PublicKey): PublicKey;
