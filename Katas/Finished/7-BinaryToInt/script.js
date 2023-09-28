//i https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// This works just fine
const binaryArrayToNumber1 = arr => {
  return parseInt(arr.join(''), 2);
};

// But here it is clearer what is happening
const binaryArrayToNumber2 = arr => {
  let int = 0;
  arr.reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      continue;
    }
    if (arr[i] === 1) {
      int += Math.pow(2, i);
    }
  }

  return int;
};
