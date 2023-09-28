//i https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
const checkStringEnd = (str, ending) => {
  return (
    str
      .split('')
      .splice(str.length - ending.length, ending.length)
      .join('') === ending
  );
};
