
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;
const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    const block = {id: blocks.length}
    blocks.push(block);
}

const blockchain = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
}
export default blockchain;