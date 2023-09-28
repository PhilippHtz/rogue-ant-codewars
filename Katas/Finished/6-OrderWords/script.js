//i https://www.codewars.com/kata/55c45be3b2079eccff00010f
const orderWords = str => {
  const words = str.split(' ');
  const sortedWords = [];

  for (let i = 1; i <= words.length; i++) {
    sortedWords.push(words.find(word => word.includes(i)));
  }

  return sortedWords.join(' ');
};
