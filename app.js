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
console.log(parseInt(str));
