//i https://www.codewars.com/kata/52597aa56021e91c93000cb0
const moveZeros = arr => {
  // let result = [];
  // let zero = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== 0) {
  //     result.push(arr[i]);
  //   } else if (arr[i] === 0) {
  //     zero.push(arr[i]);
  //   } else if (typeof arr[i] !== 'number') continue;
  // }

  // result.push(...zero);

  const filteredArr = arr.filter(x => x !== 0);
  const zeroArr = arr.filter(x => x === 0);

  filteredArr.push(...zeroArr);

  return filteredArr;
};

//i https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5
const parseInt = str => {
  const words = str.replaceAll('-', ' ').split(' ');
  const numbers = [];

  const dictionary = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  for (let i = 0; i < words.length; i++) {
    if (words[i] === 'and') continue;

    numbers.push(dictionary[words[i]]);
  }

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    const nextNum = numbers[i + 1];

    if (nextNum === 100 || nextNum === 1000) {
      num = num * nextNum;
      numbers.splice(nextNum, 1);
    }
  }

  const result = numbers[0];

  console.log(numbers);

  return result;
};

const str = 'seven hundred eighty-three thousand nine hundred and nineteen';

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

//i https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
const checkStringEnd = (str, ending) => {
  return (
    str
      .split('')
      .splice(str.length - ending.length, ending.length)
      .join('') === ending
  );
};

//i https://www.codewars.com/kata/5648b12ce68d9daa6b000099
const peopleOnBus = busStops => {
  let numberOfPeople = 0;
  busStops.forEach(busStop => {
    numberOfPeople = numberOfPeople + busStop[0] - busStop[1];
  });

  return numberOfPeople;
};

//i https://www.codewars.com/kata/525f50e3b73515a6db000b83
const createPhoneNumber = numbers => {
  return (
    '(' +
    numbers[0] +
    numbers[1] +
    numbers[2] +
    ')' +
    ' ' +
    numbers[3] +
    numbers[4] +
    numbers[5] +
    '-' +
    numbers[6] +
    numbers[7] +
    numbers[8] +
    numbers[9]
  );
};

const orderWords = str => {
  const words = str.split(' ');
  const sortedWords = [];

  for (let i = 1; i <= words.length; i++) {
    sortedWords.push(words.find(word => word.includes(i)));
  }

  return sortedWords.join(' ');
};

//i https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = url => {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  return url.split('.')[0];
};

//i https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
const splitStrings = str => {
  if (str.length % 2 !== 0) {
    str = str.concat('_');
  }

  str.match();

  console.log(str);
};

splitStrings('abc');
