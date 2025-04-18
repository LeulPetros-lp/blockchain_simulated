import { calculateHash, calculateHashForBlock } from "./hashFuntions"
import { Block } from '../classes/Block';



const genesisBlock: Block = new Block(
    0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', 'null', 1465154705, 'my genesis block'
)


const isValidNewBlock = (newBlock: Block, previousBlock: Block) => {
    if (newBlock.index - 1 !== previousBlock.index) {
        console.log('Invalid Block')

        return false;
    } else if (previousBlock.hash !== newBlock.previous_hash) {
        console.log('Invalid Previous Hash')

        return false;
    } else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
        console.log(`Invalid hash ${calculateHashForBlock(newBlock)}  ${newBlock.hash}`)

        return false;
    }

    return true
}



const isValidBlockStructure = (block: Block): boolean => {

    // Function returns true if all are validated

    return typeof block.index === 'number'
        && typeof block.hash === 'string'
        && typeof block.previous_hash === 'string'
        && typeof block.timestamp === 'number'
        && typeof block.data === 'string'

}

const isValidChain = (blockChainToValidate: Block[]): boolean => {
    const isValidGenesis = (block: Block): boolean => {
        return JSON.stringify(block) === JSON.stringify(genesisBlock);
    }

    if (!isValidGenesis(blockChainToValidate[0])) {
        return false
    }

    for (let i = 0; i < blockChainToValidate.length; i++) {
        if (!isValidNewBlock(blockChainToValidate[i], blockChainToValidate[i - 1])) {
            return false
        }
    }

    return true
}


export { isValidNewBlock, isValidChain, isValidBlockStructure, genesisBlock }