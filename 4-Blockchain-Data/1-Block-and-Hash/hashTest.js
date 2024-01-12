import { assert } from 'chai';
import Block from './Block.js';
import CryptoJS from 'crypto-js';
const { SHA256 } = CryptoJS;

describe('Block', function() {
    const newBlock = new Block();

    it('should have a hash property', function() {
        assert(/^[0-9A-F]{64}$/i.test(newBlock.toHash()));
    });
});