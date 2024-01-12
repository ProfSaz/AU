import CryptoJS from "crypto-js";
const { SHA256 } = CryptoJS;

class Block {
    toHash() {
        return SHA256("");
    }
}

export default Block;