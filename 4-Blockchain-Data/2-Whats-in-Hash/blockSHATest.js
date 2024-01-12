import { assert } from 'chai';
import Block from './Block.js';
import CryptoJS from 'crypto-js';
const { SHA256 } = CryptoJS;

describe('Block', function() {
    it('should store a random name', function() {
        const randomName = require('faker').name.findName();
        assert.equal(randomName, new Block(randomName).data)
    });

    it('should hash some random data', function() {
        const randomEmail = require('faker').internet.email();
        const myHash = SHA256(randomEmail).toString();
        const yourHash = new Block(randomEmail).toHash().toString();
        assert.equal(myHash, yourHash);
    })
})