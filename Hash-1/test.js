import { expect } from 'chai';
import { sha256 } from 'ethereum-cryptography/sha256.js';
import { utf8ToBytes } from 'ethereum-cryptography/utils.js';
import findColor from './index.js';

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

describe('findColor', () => {
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            expect(findColor(sha256(utf8ToBytes(color)))).to.equal(color);
        });
    });
});
