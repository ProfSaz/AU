import Block from './Block.js';

class Blockchain {
    constructor() {
        this.chain = [ new Block() ];
    }
}

export default Blockchain;
