"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ixsToTx = exports.ixToTx = void 0;
const web3_js_1 = require("@solana/web3.js");
function ixToTx(ix) {
    const tx = new web3_js_1.Transaction();
    tx.add(ix);
    return tx;
}
exports.ixToTx = ixToTx;
function ixsToTx(ixs) {
    const tx = new web3_js_1.Transaction();
    ixs.forEach((ix) => tx.add(ix));
    return tx;
}
exports.ixsToTx = ixsToTx;
