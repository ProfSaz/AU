import CryptoJS from "crypto-js";
const { SHA256 } = CryptoJS;

class Block {
    constructor(data) {
        this.data = data;
    }
    
    toHash() {
        return SHA256(this.data + this.previousHash);
    }
}


export default Block;