function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let halfArray = Math.floor(array.length / 2);
  let array1 = array.slice(0, halfArray);
  let array2 = array.slice(halfArray);

  return babyMerge(mergeSort(array1), mergeSort(array2))
}

function babyMerge(ar1, ar2) {
  let newArr = [];

  while (ar1.length !== 0 && ar2.length !== 0) {
    if (ar1[0] <= ar2[0]) {
      newArr.push(ar1[0]);
      ar1.shift();
    } else if (ar2[0] <= ar1[0]) {
      newArr.push(ar2[0]);
      ar2.shift();
    }
  }
  if (!ar1.length && ar2.length) {
    newArr.push(ar2);
    return [].concat.apply([], newArr);
  } else if (!ar2.length && ar1.length) {
    newArr.push(ar1)
    return [].concat.apply([], newArr);
  } else {
    return [].concat.apply([], newArr);
  }

}

export default mergeSort
