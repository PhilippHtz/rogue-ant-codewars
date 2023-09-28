//i https://www.codewars.com/kata/56747fd5cb988479af000028
const getMiddle = str => {
  return str.length % 2 === 0
    ? str.substring(str.length / 2 - 1, str.length / 2 + 1)
    : str.substring(str.length / 2, str.length / 2 + 1);
};
