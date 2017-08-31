function randomArray(count, max) {
  let numbers = [];

  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * max);
    
    numbers.push(randomNum);
  }
  return numbers;
}

export default randomArray
