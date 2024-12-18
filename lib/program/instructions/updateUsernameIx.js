"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsernameIx = void 0;
async function updateUsernameIx(program, accounts, args) {
    return program.methods
        .updateUsername(args.newUsername)
        .accounts({
        privyUser: accounts.privyUser,
    })
        .instruction();
}
exports.updateUsernameIx = updateUsernameIx;
