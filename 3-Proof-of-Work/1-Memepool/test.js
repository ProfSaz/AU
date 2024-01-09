import { assert } from 'chai';
import blockchain from './index.js';

describe('addTransaction', () => {
    it('should add the transaction to the mempool', () => {
        const transaction = { to: 'bob', sender: 'alice' }
        blockchain.addTransaction(transaction);
        assert.equal(blockchain.mempool.length, 1);
        assert.equal(blockchain.mempool[0], transaction);
    });
});