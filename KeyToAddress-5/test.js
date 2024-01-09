
import { assert } from 'chai';
import * as secp from "@noble/secp256k1";
import getAddress from './getAddress.js';
import { toHex } from "ethereum-cryptography/utils";
import { config } from 'dotenv';
config();


const PRIVATE_KEY = process.env.PRIVATE_KEY;

const EXPECTED_ADDRESS = "16bB6031CBF3a12B899aB99D96B64b7bbD719705";

describe('Get Address', () => {
    it('should get the address from a public key', async () => {
        const publicKey = secp.getPublicKey(PRIVATE_KEY);
        
        const address = toHex(getAddress(publicKey));

        assert.equal(address.toLowerCase(), EXPECTED_ADDRESS.toLowerCase());
    });
});