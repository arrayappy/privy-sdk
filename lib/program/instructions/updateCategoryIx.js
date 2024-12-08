"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryIx = updateCategoryIx;
async function updateCategoryIx(program, accounts, args) {
    return program.methods
        .updateCategory(args.encryptedCategories)
        .accounts({
        privyUser: accounts.privyUser,
    })
        .instruction();
}
