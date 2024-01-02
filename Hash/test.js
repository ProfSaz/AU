import {assert} from 'chai';
import osas from '../index.js';
import findColor from '../index.js';
const { sha256 } = require("ethereum-cryptography/sha256");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

describe('findColor', () => {
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            assert.equal(findColor(sha256(utf8ToBytes(color))), color);
        });
    });
});

console.log(osas);