import { assert } from 'chai';
import randomArray from '../scripts/random.js'


describe('randomArray', () => {
  it('should be a function', () => {
    assert.isFunction(randomArray);
  });

  it('should make an array', () => {
    let newArray = randomArray(10, 20);

    assert.isArray(newArray);
  });

  it('should make an array of specified length', () => {
    let desiredLength = 20;
    let newArray = randomArray(desiredLength, 20);

    assert.equal(newArray.length, desiredLength);
  });

  it('should take a maximum value', () => {
    let maxVal = 30;
    let newArray = randomArray(10, maxVal);

    for (let i = 0; i < newArray.length - 1; i++) {
      assert.isAtMost(newArray[i], maxVal);
    }
  });
});
