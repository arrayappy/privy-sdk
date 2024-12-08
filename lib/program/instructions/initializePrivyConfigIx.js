"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializePrivyConfigIx = initializePrivyConfigIx;
const web3_js_1 = require("@solana/web3.js");
const pdas_1 = require("../pdas");
async function initializePrivyConfigIx(program, accounts, args) {
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .initializePrivyConfig(args.tokensPerSol)
        .accounts({
        owner: accounts.owner,
        privyConfig: privyConfigPDA,
        systemProgram: web3_js_1.SystemProgram.programId,
    })
        .instruction();
}