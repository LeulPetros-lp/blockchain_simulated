"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateHashForBlock = exports.calculateHash = void 0;
var crypto_js_1 = require("crypto-js");
var calculateHash = function (index, previous_hash, timestamp, data) {
    return (0, crypto_js_1.SHA256)(index.toString() + previous_hash + timestamp.toString() + data).toString();
};
exports.calculateHash = calculateHash;
var calculateHashForBlock = function (newBlock) {
    return (0, crypto_js_1.SHA256)(newBlock.index.toString() + newBlock.previous_hash + newBlock.timestamp.toString() + newBlock.data).toString();
};
exports.calculateHashForBlock = calculateHashForBlock;
