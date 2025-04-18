// import { isValidBlockStructure, isValidNewBlock, isValidChain } from "./validate"
// import { Block } from "../classes/Block";

// const replaceChain = (newBlocks: Block[]) => {
//     if (isValidChain(newBlocks) && newBlocks.length > getBlockChain().length) {
//         console.log('Recived blockchain is is valid. Replacing current blockchain with recived blockchain')

//         blockChain = newBlocks;
//         broadcastLatest()
//     } else {
//         console.log('Recived blockchain invalid')
//     }
// }

// // Custom function for adding into the blockchain
// const addBlockToChain = (block: Block) => {
//     if (isValidNewBlock(block, previousBlock) && isValidBlockStructure(block)) {
//         blockChain.push(block)
//     }
// }


// const generateNextBlock = (blockData: string) => {
//     const nextIndex: number = previousBlock.index + 1;
//     const nextTimeStamp: number = new Date().getTime() / 1000;
//     const nextHash: string = calculateHash(nextIndex, previousBlock.hash, nextTimeStamp, blockData)

//     const newBlock: Block = new Block(nextIndex, nextHash, previousBlock.hash, nextTimeStamp, blockData)

//     return newBlock;
// }