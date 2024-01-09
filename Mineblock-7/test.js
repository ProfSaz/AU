import { assert } from 'chai';
import blockchain from './index.js';

describe('mine', () => {
    describe('first block', () => {
        let hash;
        before(() => {
            hash = blockchain.mine();
        });
        it('should add to the blocks', () => {
            assert.equal(blockchain.blocks.length, 1);
        });
        it('should store the expected id', () => {
            const lastBlock = blockchain.blocks[blockchain.blocks.length - 1];
            assert(lastBlock.id != null, "did not find an id property on the block");
            assert.equal(lastBlock.id, 0);
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
        it('should store the expected id', () => {
            const lastBlock = blockchain.blocks[blockchain.blocks.length - 1];
            assert(lastBlock.id != null, "did not find an id property on the block");
            assert.equal(lastBlock.id, 1);
        });
    });
});