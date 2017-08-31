import { assert } from 'chai';
import insertionSort from '../scripts/insertion.js'
import randomArray from '../scripts/random.js'

describe('TDD with insertionSort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should sort an array of 2 items', () => {
    assert.deepEqual(insertionSort([2, 1]), [1, 2]);
  });

  it('should sort an array of 5 items', () => {
    assert.isArray(randomArray(5, 10));
    let newArray = randomArray(5, 10);
    let sortedArray = insertionSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should sort an array of many items', () => {
    let newArray = randomArray(1000, 1000);
    let sortedArray = insertionSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should sort an array of a ridiculous number of items', () => {
    let newArray = randomArray(20000, 1000000);
    let sortedArray = insertionSort(newArray);

    for (let i = 0; i < newArray.length - 1; i ++) {
      assert.isAtMost(sortedArray[i], sortedArray[i + 1]);
    }
  });

  it('should have the same results as the sort() prototype', () => {
    let newArray = randomArray(1000, 1000);
    let insertionSorted = insertionSort(newArray);
    let prototypeSorted = newArray.sort();
    
    assert.equal(insertionSorted, prototypeSorted);
  });
});
