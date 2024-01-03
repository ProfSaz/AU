import { sha256 } from "ethereum-cryptography/sha256";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils";

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash'
function findColor(hash) {
    return COLORS.find(x => toHex(sha256(utf8ToBytes(x))) === toHex(hash));

    console.log("yes");
}

export default findColor;
