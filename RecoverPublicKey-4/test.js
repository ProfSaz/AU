import signMessage from './signmessage.js';
import recoverKey from './recoverkey.js';
import * as secp from '@noble/secp256k1';
import { assert } from 'chai';
import { toHex } from 'ethereum-cryptography/utils.js';

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe('Recover Key', () => {
    it('should recover the public key from a signed message', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');

        const publicKey = secp.getPublicKey(PRIVATE_KEY);

        const recovered = await recoverKey('hello world', sig, recoveryBit);

        assert.equal(toHex(recovered), toHex(publicKey));
    });
});