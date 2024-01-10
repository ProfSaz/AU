import { assert } from 'chai';
import blockchain from './index.js';
import CryptoJS from 'crypto-js';
const { SHA256 } = CryptoJS;

describe('mine', () => {
    describe('first block', () => {
        let hash;
        before(() => {
            hash = blockchain.mine();
        });
        it('should add to the blocks', () => {
            assert.equal(blockchain.blocks.length, 1);
        });
        it('should return the expected hash', () => {
            const expectedHash = SHA256(JSON.stringify({ id: 0 }));
            const lastBlock = blockchain.blocks[blockchain.blocks.length - 1];
            assert(lastBlock.hash, "did not find a hash property on the block");
            assert.equal(lastBlock.hash.toString(), expectedHash.toString());
        });
    });
    describe('second block', () => {
        let hash;
        before(() => {
            hash = blockchain.mine();
        });
        it('should add to the blocks', () => {
            assert.equal(blockchain.blocks.length, 2);
        });
        it('should return the expected hash', () => {
            const expectedHash = SHA256(JSON.stringify({ id: 1 }));
            const lastBlock = blockchain.blocks[blockchain.blocks.length - 1];
            assert(lastBlock.hash, "did not find a hash property on the block");
            assert.equal(lastBlock.hash.toString(), expectedHash.toString());
        });
    });
});