//i https://www.codewars.com/kata/54da5a58ea159efa38000836
const findOdd = intArr => {
  let result;

  for (let i = 0; i < intArr.length; i++) {
    result = result ^ intArr[i];
  }

  return result;
};

const numbers = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

const arr = numbers.filter((item, pos) => {
  return numbers.indexOf(item) == pos;
});

console.log(findOdd(numbers));
