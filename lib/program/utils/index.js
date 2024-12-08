"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ixToTx = ixToTx;
exports.ixsToTx = ixsToTx;
const web3_js_1 = require("@solana/web3.js");
function ixToTx(ix) {
    const tx = new web3_js_1.Transaction();
    tx.add(ix);
    return tx;
}
function ixsToTx(ixs) {
    const tx = new web3_js_1.Transaction();
    ixs.forEach((ix) => tx.add(ix));
    return tx;
}
