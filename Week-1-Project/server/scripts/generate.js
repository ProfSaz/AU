const secp = require("@noble/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");


const privatekey = toHex(secp.utils.randomPrivateKey());;

console.log("private key",privatekey);

const publickey = toHex(secp.getPublicKey(privatekey));

console.log("public key", publickey);

