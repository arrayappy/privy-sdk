"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserIx = createUserIx;
const pdas_1 = require("../pdas");
async function createUserIx(program, accounts, args, postIxs) {
    const privyUserPDA = (0, pdas_1.getPrivyUserPda)(program.programId, accounts.user);
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .createUser(args.username, args.encryptedCategories, args.depositLamports)
        .accounts({
        user: accounts.user,
        privyUser: privyUserPDA,
        privyConfig: privyConfigPDA,
    })
        .postInstructions(postIxs)
        .instruction();
}
