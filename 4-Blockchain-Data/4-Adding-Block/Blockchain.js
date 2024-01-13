import Block from './Block.js';

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }

    addBlock(block) {
        this.chain.push(block);
    }
}

export default Blockchain;
