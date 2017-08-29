const insertionSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = j - 1; i >= 0; i--) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

export default insertionSort
