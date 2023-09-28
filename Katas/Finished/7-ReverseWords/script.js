//i https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
const reverseWords = str => {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
};
