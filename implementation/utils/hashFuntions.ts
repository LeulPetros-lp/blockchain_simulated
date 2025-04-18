import { SHA256 } from 'crypto-js'
import { Block } from '../classes/Block';


const calculateHash = (index: number, previous_hash: string, timestamp: number, data: string) => {
    return SHA256(index.toString() + previous_hash + timestamp.toString() + data).toString()
}

const calculateHashForBlock = (newBlock: Block) => {
    return SHA256(newBlock.index.toString() + newBlock.previous_hash + newBlock.timestamp.toString() + newBlock.data).toString()
}

export  { calculateHash, calculateHashForBlock }