// import { secp256k1 } from "ethereum-cryptography/secp256k1";
import * as secp from "@noble/secp256k1"
import hashMessage from "./hashmessage.js";

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const messageHash = hashMessage(msg);
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

export default signMessage;