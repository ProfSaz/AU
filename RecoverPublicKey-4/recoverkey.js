import * as secp from "@noble/secp256k1"
import hashMessage from "./hashmessage.js";


async function recoverKey(message, signature, recoveryBit) {
    const messageHash = hashMessage(message);
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
}

export default recoverKey;