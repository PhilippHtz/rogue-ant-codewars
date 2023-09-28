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
