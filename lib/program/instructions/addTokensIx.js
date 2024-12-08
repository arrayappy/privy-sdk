"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTokensIx = addTokensIx;
const pdas_1 = require("../pdas");
async function addTokensIx(program, accounts, args, postIxs) {
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .addTokens(args.depositLamports)
        .accounts({
        user: accounts.user,
        privyUser: accounts.privyUser,
        privyConfig: privyConfigPDA,
    })
        .postInstructions(postIxs)
        .instruction();
}
