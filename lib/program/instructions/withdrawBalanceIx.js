"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawBalanceIx = withdrawBalanceIx;
const pdas_1 = require("../pdas");
async function withdrawBalanceIx(program, accounts, args) {
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .withdrawBalance(args.lamports)
        .accounts({
        owner: accounts.owner,
        privyConfig: privyConfigPDA,
    })
        .instruction();
}
