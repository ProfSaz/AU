import signMessage from './signmessage.js';
import hashMessage from './hashmessage.js';
import { assert } from 'chai';
import * as secp from "@noble/secp256k1"
import { secp256k1 } from 'ethereum-cryptography/secp256k1';
import { toHex } from "ethereum-cryptography/utils";
import { config } from 'dotenv';
config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

describe('Sign Message', () => {
    it('should return both a signature and a recovery bit', async () => {
        const response = await signMessage('hello world');

        const errMessage = "expected signMessage to return both a signature and recovery bit!";
        assert(response.length, errMessage);
        assert(response.length === 2, errMessage);

        const [signature, recoveryBit] = response;
        assert(signature.length, "expected signature to be a Uint8Array");
        assert(typeof recoveryBit === "number", "expected the recovery bit to be a number");
    });

    it('should have been signed by the same private key', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');
        const messageHash = hashMessage('hello world');
        const recovered = secp.recoverPublicKey(messageHash, sig, recoveryBit);

        const publicKey = secp.getPublicKey(PRIVATE_KEY);
        assert.equal(toHex(recovered), toHex(publicKey));
    });
});