//i https://www.codewars.com/kata/517abf86da9663f1d2000003
const toCamelCase = str => {
  return str.replaceAll(/[-_](\w)/g, match => match.slice(1).toUpperCase());
};

console.log(toCamelCase('the-stealth_warrior'));
