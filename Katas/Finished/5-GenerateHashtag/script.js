//i https://www.codewars.com/kata/52449b062fb80683ec000024
const generateHashtag = str => {
  if (!str.trim()) return false;

  const strFinal =
    '#' +
    str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

  return strFinal.length > 140 ? false : strFinal;
};

console.log(generateHashtag('This is a hashtag'));
