//i https://www.codewars.com/kata/55983863da40caa2c900004e

const nextBiggerNumber = number => {
  const digits = number.toString().split('').map(Number);

  //find smallest digit from the right
  let i = digits.length - 1;
  while (i > 0 && digits[i - 1] >= digits[i]) {
    i--;
  }

  if (i <= 0) {
    return -1;
  }

  // find smallest digit to the right of i
  let j = digits.length - 1;
  while (digits[j] <= digits[i - 1]) {
    j--;
  }

  [digits[i - 1], digits[j]] = [digits[j], digits[i - 1]];

  const sortedSuffix = digits.slice(i).sort((a, b) => a - b);

  const result = [...digits.slice(0, i), ...sortedSuffix].join('');

  return Number(result);
};

nextBiggerNumber(123);
