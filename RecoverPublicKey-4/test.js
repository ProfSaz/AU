import signMessage from './signmessage.js';
import recoverKey from './recoverkey.js';
import * as secp from '@noble/secp256k1';
import { assert } from 'chai';
import { toHex } from 'ethereum-cryptography/utils.js';
import { config } from 'dotenv';
config();

const PRIVATE_KEY = process.env.PRIVATE_KEY; // Now reads the variable from .env

describe('Recover Key', () => {
    it('should recover the public key from a signed message', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');

        const publicKey = secp.getPublicKey(PRIVATE_KEY);

        const recovered = await recoverKey('hello world', sig, recoveryBit);

        assert.equal(toHex(recovered), toHex(publicKey));
    });
});
