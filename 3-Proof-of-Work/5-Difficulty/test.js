import { assert } from 'chai';
import blockchain from './index.js';
import CryptoJS from 'crypto-js';
const { SHA256 } = CryptoJS;

describe('mine', () => {
    describe('with 5 mempool transactions', () => {
        before(() => {
            for (let i = 0; i < 5; i++) {
                blockchain.addTransaction({ sender: 'bob', to: 'alice' });
            }
        });
        describe('after mining', () => {
            before(() => {
                blockchain.mine();
            });
            it('should add to the blocks', () => {
                assert.equal(blockchain.blocks.length, 1);
            });
            it('should store the transactions on the block', () => {
                assert.equal(blockchain.blocks[blockchain.blocks.length - 1].transactions.length, 5);
            });
            it('should clear the mempool', () => {
                assert.equal(blockchain.mempool.length, 0);
            });
            it('should have a nonce', () => {
                assert.isDefined(blockchain.blocks[blockchain.blocks.length - 1].nonce, "did not find a nonce on the block");
            });
            it('should have a hash lower than the target difficulty', () => {
                const actual = blockchain.blocks[blockchain.blocks.length - 1].hash.toString();
                const isLess = BigInt(`0x${actual}`) < blockchain.TARGET_DIFFICULTY;
                assert(isLess, "expected the hash to be less than the target difficulty");
            });
        });
    });
    describe('with 15 mempool transactions', () => {
        before(() => {
            for (let i = 0; i < 15; i++) {
                blockchain.addTransaction({ sender: 'bob', to: 'alice' });
            }
        });
        describe('after mining', () => {
            before(() => {
                blockchain.mine();
            });
            it('should add to the blocks', () => {
                assert.equal(blockchain.blocks.length, 2);
            });
            it('should store the transactions on the block', () => {
                assert.equal(blockchain.blocks[blockchain.blocks.length - 1].transactions.length, 10);
            });
            it('should reduce the mempool to 5', () => {
                assert.equal(blockchain.mempool.length, 5);
            });
            it('should have a nonce', () => {
                assert.isDefined(blockchain.blocks[blockchain.blocks.length - 1].nonce, "did not find a nonce on the block");
            });
            it('should have a hash lower than the target difficulty', () => {
                const actual = blockchain.blocks[blockchain.blocks.length - 1].hash.toString();
                const isLess = BigInt(`0x${actual}`) < blockchain.TARGET_DIFFICULTY;
                assert(isLess, "expected the hash to be less than the target difficulty");
            });
            describe('after mining again', () => {
                before(() => {
                    blockchain.mine();
                });
                it('should add to the blocks', () => {
                    assert.equal(blockchain.blocks.length, 3);
                });
                it('should store the transactions on the block', () => {
                    assert.equal(blockchain.blocks[blockchain.blocks.length - 1].transactions.length, 5);
                });
                it('should clear the mempool', () => {
                    assert.equal(blockchain.mempool.length, 0);
                });
                it('should have a nonce', () => {
                    assert.isDefined(blockchain.blocks[blockchain.blocks.length - 1].nonce, "did not find a nonce on the block");
                });
                it('should have a hash lower than the target difficulty', () => {
                    const actual = blockchain.blocks[blockchain.blocks.length - 1].hash.toString();
                    const isLess = BigInt(`0x${actual}`) < blockchain.TARGET_DIFFICULTY;
                    assert(isLess, "expected the hash to be less than the target difficulty");
                });
            });
        });
    });
});