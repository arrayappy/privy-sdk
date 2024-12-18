"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = exports.symmetricExtendKey = void 0;
const crypto_1 = __importDefault(require("crypto"));
function symmetricExtendKey(key, length) {
    return Buffer.from(key.repeat(Math.ceil(length / key.length)).slice(0, length));
}
exports.symmetricExtendKey = symmetricExtendKey;
function encrypt(data, key, iv) {
    let cipher = crypto_1.default.createCipheriv('aes-128-cbc', key, iv);
    let encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return encrypted.toString('base64');
}
exports.encrypt = encrypt;
function decrypt(encryptedData, key, iv) {
    let decipher = crypto_1.default.createDecipheriv('aes-128-cbc', key, iv);
    let decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedData, 'base64')), decipher.final()]);
    return decrypted;
}
exports.decrypt = decrypt;
