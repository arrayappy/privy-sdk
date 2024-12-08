"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMessageIx = insertMessageIx;
const pdas_1 = require("../pdas");
async function insertMessageIx(program, accounts, args) {
    const privyConfigPDA = (0, pdas_1.getPrivyConfigPda)(program.programId);
    return program.methods
        .insertMessage(args.encryptedMessage)
        .accounts({
        owner: accounts.owner,
        privyConfig: privyConfigPDA,
        privyUser: accounts.privyUser,
    })
        .instruction();
}
