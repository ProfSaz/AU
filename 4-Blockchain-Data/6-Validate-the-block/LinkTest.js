import { assert } from 'chai';
import Block from './Block.js';
import Blockchain from './Blockchain.js';
import CryptoJS from 'crypto-js';
const { SHA256 } = CryptoJS;




describe('Blockchain', function() {
    let blockchain;
    beforeEach(() => {
      blockchain = new Blockchain();
      blockchain.addBlock(new Block("Dan"));
      blockchain.addBlock(new Block("Peter"));
      blockchain.addBlock(new Block("James"));
    });
    
    it('should be considered valid', function() {
      assert(blockchain.isValid());
    });
  
    describe('tampering with a previousHash', function() {
      beforeEach(() => {
        blockchain.chain[1].previousHash = SHA256("gibberish");
      });
  
      it('should not be considered valid', function() {
        assert(!blockchain.isValid());
      });
    });
    
    describe('tampering with data', function() {
      beforeEach(() => {
        blockchain.chain[0].data = "Something Else";
      });
  
      it('should not be considered valid', function() {
        assert(!blockchain.isValid());
      });
    });
  });