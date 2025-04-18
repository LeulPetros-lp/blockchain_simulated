"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genesisBlock = exports.isValidBlockStructure = exports.isValidChain = exports.isValidNewBlock = void 0;
var hashFuntions_1 = require("./hashFuntions");
var Block_1 = require("../classes/Block");
var genesisBlock = new Block_1.Block(0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', 'null', 1465154705, 'my genesis block');
exports.genesisBlock = genesisBlock;
var isValidNewBlock = function (newBlock, previousBlock) {
    if (newBlock.index - 1 !== previousBlock.index) {
        console.log('Invalid Block');
        return false;
    }
    else if (previousBlock.hash !== newBlock.previous_hash) {
        console.log('Invalid Previous Hash');
        return false;
    }
    else if ((0, hashFuntions_1.calculateHashForBlock)(newBlock) !== newBlock.hash) {
        console.log("Invalid hash ".concat((0, hashFuntions_1.calculateHashForBlock)(newBlock), "  ").concat(newBlock.hash));
        return false;
    }
    return true;
};
exports.isValidNewBlock = isValidNewBlock;
var isValidBlockStructure = function (block) {
    // Function returns true if all are validated
    return typeof block.index === 'number'
        && typeof block.hash === 'string'
        && typeof block.previous_hash === 'string'
        && typeof block.timestamp === 'number'
        && typeof block.data === 'string';
};
exports.isValidBlockStructure = isValidBlockStructure;
var isValidChain = function (blockChainToValidate) {
    var isValidGenesis = function (block) {
        return JSON.stringify(block) === JSON.stringify(genesisBlock);
    };
    if (!isValidGenesis(blockChainToValidate[0])) {
        return false;
    }
    for (var i = 0; i < blockChainToValidate.length; i++) {
        if (!isValidNewBlock(blockChainToValidate[i], blockChainToValidate[i - 1])) {
            return false;
        }
    }
    return true;
};
exports.isValidChain = isValidChain;
