export class Block {
    public index: number;
    public hash: string;
    public previous_hash: string;
    public timestamp: number;
    public data: string;


    constructor(index: number, hash: string, previous_hash: string, timestamp: number, data: string) {
        this.index = index
        this.hash = hash
        this.previous_hash = previous_hash
        this.timestamp = timestamp
        this.data = data
    }


}

