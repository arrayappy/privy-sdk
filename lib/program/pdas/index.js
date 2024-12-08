"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrivyConfigPda = getPrivyConfigPda;
exports.getPrivyUserPda = getPrivyUserPda;
const web3_js_1 = require("@solana/web3.js");
const PdaConstants_1 = require("../constants/PdaConstants");
// Getter function to fetch the PrivyConfig PDA
function getPrivyConfigPda(programId) {
    const [privyConfigPDA] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from(PdaConstants_1.PRIVY_CONFIG, 'utf8')], programId);
    return privyConfigPDA;
}
// Getter function to fetch the PrivyUser PDA
function getPrivyUserPda(programId, walletAddress) {
    const [privyUserPDA] = web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from(PdaConstants_1.PRIVY_USER),
        walletAddress.toBuffer()
    ], programId);
    return privyUserPDA;
}