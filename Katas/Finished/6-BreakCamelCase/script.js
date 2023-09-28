//i https://www.codewars.com/kata/5208f99aee097e6552000148
const breakCamelCase = str => {
  const breakpoint = /(?=[A-Z])/;
  return str.split(breakpoint).join(' ');
};
