"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePrivyConfigIx = updatePrivyConfigIx;
const web3_js_1 = require("@solana/web3.js");
const pdas_1 = require("../pdas");
async function updatePrivyConfigIx(program, accounts, args) {
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .updatePrivyConfig(args.newTokensPerSol)
        .accounts({
        owner: accounts.owner,
        privyConfig: privyConfigPDA,
        systemProgram: web3_js_1.SystemProgram.programId,
    })
        .instruction();
}
