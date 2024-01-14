import * as secp from "@noble/secp256k1";
import { toHex } from "ethereum-cryptography/utils";

const privatekey = toHex(secp.utils.randomPrivateKey());;

console.log("private key",privatekey);

const publickey = toHex(secp.getPublicKey(privatekey));

console.log("public key", publickey);

