import { expect } from 'chai';
import { sha256 } from 'ethereum-cryptography/sha256';
import { utf8ToBytes } from 'ethereum-cryptography/utils';
import findColor from '../Hash/index.js';

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

describe('findColor', () => {
    COLORS.forEach((color) => {
        it(`should work for ${color}`, () => {
            expect(findColor(sha256(utf8ToBytes(color)))).to.equal(color);
        });
    });
});
