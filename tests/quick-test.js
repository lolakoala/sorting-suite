import { assert } from 'chai';
import quickSort from '../scripts/quick.js'
import randomArray from '../scripts/random.js'

describe('TDD with quickSort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should sort an array of 2 items', () => {
    assert.deepEqual(quickSort([2, 1]), [1, 2]);
  });

  it('should sort an array of 5 items', () => {
    assert.isArray(randomArray(5, 10));
    let newArray = randomArray(5, 10);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should sort an array of many items', () => {
    let newArray = randomArray(1000, 1000);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should sort an array of a ridiculous number of items', () => {
    let newArray = randomArray(1000000, 1000000);
    let sortedArray = quickSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should have similar results as the sort() prototype', () => {
    let newArray = randomArray(10, 10);
    let quickSorted = quickSort(newArray);
    let prototypeSorted = newArray.sort();
    
    assert.deepEqual(quickSorted, prototypeSorted);
  });
});
