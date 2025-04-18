import { SHA256 } from 'crypto-js'
import { Block } from './classes/Block'
import { calculateHash, calculateHashForBlock } from './utils/hashFuntions'
import { isValidBlockStructure, isValidChain, isValidNewBlock} from "./utils/validate"
import { initExpressServer } from './utils/server'


const genesisBlock: Block = new Block(
    0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', 'null', 1465154705, 'Genesis block'
)

const broadcastLatest = () => {
    console.log(blockChain)
}


// Single block chain
let blockChain: Block[] = [genesisBlock]


const getBlockChain = () => {
    return blockChain
}


// Custom function
const getLatestBlock = () => {
    return blockChain[blockChain.length - 1]
}

const previousBlock = getLatestBlock()


const generateNextBlock = (blockData: string) => {
    const previousBlock: Block = getLatestBlock()

    const nextIndex: number = previousBlock.index + 1;
    const nextTimeStamp: number = new Date().getTime() / 1000;
    const nextHash: string = calculateHash(nextIndex, previousBlock.hash, nextTimeStamp, blockData)

    const newBlock: Block = new Block(nextIndex, nextHash, previousBlock.hash, nextTimeStamp, blockData)

    return newBlock;
}


// NTS -> Validating this one
const newBlock = generateNextBlock("Second Block")




const replaceChain = (newBlocks: Block[]) => {
    if(isValidChain(newBlocks) && newBlocks.length > getBlockChain().length) {
        console.log('Recived blockchain is is valid. Replacing current blockchain with recived blockchain')

        blockChain = newBlocks;
        broadcastLatest()
    } else {
        console.log('Recived blockchain invalid')
    }
}

// Custom function for adding into the blockchain
const addBlockToChain = (block: Block) => {
    const latestBlock = getLatestBlock()

    if(isValidNewBlock(block, latestBlock) && isValidBlockStructure(block)) {
        blockChain.push(block)
    }
}


const app = initExpressServer(8080)

app.get('/chain' , (req,res) => {
    res.send(getBlockChain())
})


app.post("/chain-add", (req, res) => {
    const { data_val } = req.body
    
    // Generating a new block for the provided data

    const block  = generateNextBlock(data_val)

    blockChain.push(block)


    res.send(block)
     
})


console.log(blockChain)

