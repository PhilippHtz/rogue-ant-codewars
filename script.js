//i https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
const splitStrings = str => {
  if (str.length % 2 !== 0) {
    str = str.concat('_');
  }

  str.match();

  console.log(str);
};

splitStrings('abc');
