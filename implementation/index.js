"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = require("./classes/Block");
var hashFuntions_1 = require("./utils/hashFuntions");
var validate_1 = require("./utils/validate");
var server_1 = require("./utils/server");
var genesisBlock = new Block_1.Block(0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', 'null', 1465154705, 'Genesis block');
var broadcastLatest = function () {
    console.log(blockChain);
};
// Single block chain
var blockChain = [genesisBlock];
var getBlockChain = function () {
    return blockChain;
};
// Custom function
var getLatestBlock = function () {
    return blockChain[blockChain.length - 1];
};
var previousBlock = getLatestBlock();
var generateNextBlock = function (blockData) {
    var previousBlock = getLatestBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimeStamp = new Date().getTime() / 1000;
    var nextHash = (0, hashFuntions_1.calculateHash)(nextIndex, previousBlock.hash, nextTimeStamp, blockData);
    var newBlock = new Block_1.Block(nextIndex, nextHash, previousBlock.hash, nextTimeStamp, blockData);
    return newBlock;
};
// NTS -> Validating this one
var newBlock = generateNextBlock("Second Block");
var replaceChain = function (newBlocks) {
    if ((0, validate_1.isValidChain)(newBlocks) && newBlocks.length > getBlockChain().length) {
        console.log('Recived blockchain is is valid. Replacing current blockchain with recived blockchain');
        blockChain = newBlocks;
        broadcastLatest();
    }
    else {
        console.log('Recived blockchain invalid');
    }
};
// Custom function for adding into the blockchain
var addBlockToChain = function (block) {
    var latestBlock = getLatestBlock();
    if ((0, validate_1.isValidNewBlock)(block, latestBlock) && (0, validate_1.isValidBlockStructure)(block)) {
        blockChain.push(block);
    }
};
var app = (0, server_1.initExpressServer)(8080);
app.get('/chain', function (req, res) {
    res.send(getBlockChain());
});
app.post("/chain-add", function (req, res) {
    var data_val = req.body.data_val;
    // Generating a new block for the provided data
    var block = generateNextBlock(data_val);
    blockChain.push(block);
    res.send(block);
});
console.log(blockChain);
