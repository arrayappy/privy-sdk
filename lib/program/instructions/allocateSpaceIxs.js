"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allocateSpaceIx = allocateSpaceIx;
async function allocateSpaceIx(program, user, privyUserPDA, space, count) {
    const allocatePromises = [];
    for (let i = 0; i < count; i++) {
        const promise = program.methods
            .allocateSpace(space)
            .accounts({
            user: user,
            privyUser: privyUserPDA,
        }).instruction();
        allocatePromises.push(await promise);
    }
    return allocatePromises;
}
