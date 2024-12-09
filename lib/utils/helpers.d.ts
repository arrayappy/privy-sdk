/// <reference types="node" />
declare function compSymEnc(data: string, key: Buffer, iv: Buffer): string;
declare function decompSymDec(encryptedData: string, key: Buffer, iv: Buffer): string;
declare function compAsymEnc(data: string, publicKey: string): string;
declare function decompAsymDec(encryptedData: string, privateKey: string): string;
declare function getPasswordSalt(password: string): string;
export { compSymEnc, decompSymDec, compAsymEnc, decompAsymDec, getPasswordSalt };
