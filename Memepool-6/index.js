import { sha256 } from "ethereum-cryptography/sha256";

const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    // TODO: mine a block
}

export default {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};