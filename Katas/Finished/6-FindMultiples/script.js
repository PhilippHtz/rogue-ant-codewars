//i https://www.codewars.com/kata/514b92a657cdc65150000006
const findMultiples = number => {
  const multiples = [];
  let sum = 0;

  if (number < 0) return 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  for (let i = 0; i < multiples.length; i++) {
    sum = sum + multiples[i];
  }

  return sum;
};
