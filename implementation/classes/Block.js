"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var Block = /** @class */ (function () {
    function Block(index, hash, previous_hash, timestamp, data) {
        this.index = index;
        this.hash = hash;
        this.previous_hash = previous_hash;
        this.timestamp = timestamp;
        this.data = data;
    }
    return Block;
}());
exports.Block = Block;
