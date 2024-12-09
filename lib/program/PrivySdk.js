"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anchor_1 = require("@coral-xyz/anchor");
const idl_1 = require("./idl");
const utils_1 = require("./utils");
const instructions_1 = require("./instructions");
const pdas_1 = require("./pdas");
class PrivySdk {
    connection;
    program;
    authority;
    constructor({ authority, connection, wallet, }) {
        this.connection = connection;
        this.authority = authority;
        const provider = new anchor_1.AnchorProvider(connection, wallet);
        this.program = new anchor_1.Program(idl_1.PrivyIdl, provider);
    }
    async initializePrivyConfigTx(tokensPerSol) {
        const ix = await (0, instructions_1.initializePrivyConfigIx)(this.program, {
            owner: this.authority
        }, {
            tokensPerSol
        });
        return (0, utils_1.ixToTx)(ix);
    }
    async updatePrivyConfigTx(newTokensPerSol) {
        const ix = await (0, instructions_1.updatePrivyConfigIx)(this.program, {
            owner: this.authority
        }, {
            newTokensPerSol
        });
        return (0, utils_1.ixToTx)(ix);
    }
    async createUserTx(user, username, encryptedCategories, depositLamports) {
        const privyUserPDA = (0, pdas_1.getPrivyUserPda)(this.program.programId, user);
        const allocateSpaceIxs = await (0, instructions_1.allocateSpaceIx)(this.program, user, privyUserPDA, 10000, 2);
        const ix = await (0, instructions_1.createUserIx)(this.program, { user }, { username, encryptedCategories, depositLamports }, allocateSpaceIxs);
        return (0, utils_1.ixToTx)(ix);
    }
    async updateUsernameTx(privyUser, newUsername) {
        const ix = await (0, instructions_1.updateUsernameIx)(this.program, { privyUser }, { newUsername });
        return (0, utils_1.ixToTx)(ix);
    }
    async addTokensTx(user, privyUser, depositLamports) {
        const privyUserPDA = (0, pdas_1.getPrivyUserPda)(this.program.programId, user);
        const allocateSpaceIxs = await (0, instructions_1.allocateSpaceIx)(this.program, user, privyUserPDA, 10000, 2);
        const ix = await (0, instructions_1.addTokensIx)(this.program, { user, privyUser }, { depositLamports }, allocateSpaceIxs);
        return (0, utils_1.ixToTx)(ix);
    }
    async withdrawBalanceTx(owner, lamports) {
        const ix = await (0, instructions_1.withdrawBalanceIx)(this.program, { owner }, { lamports });
        return (0, utils_1.ixToTx)(ix);
    }
    async insertMessageTx(owner, privyUser, encryptedMessage) {
        const ix = await (0, instructions_1.insertMessageIx)(this.program, { owner, privyUser }, { encryptedMessage });
        return (0, utils_1.ixToTx)(ix);
    }
    async updateCategoryTx(privyUser, encryptedCategories) {
        const ix = await (0, instructions_1.updateCategoryIx)(this.program, { privyUser }, { encryptedCategories });
        return (0, utils_1.ixToTx)(ix);
    }
    async getPrivyConfigPda() {
        return (0, pdas_1.getPrivyConfigPda)(this.program.programId);
    }
    async getPrivyUserPda(user) {
        return (0, pdas_1.getPrivyUserPda)(this.program.programId, user);
    }
}
exports.default = PrivySdk;
