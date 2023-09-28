//i https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// Floors = 3
// [
//   "  *  ",
//   " *** ",
//   "*****",
// ]
// maxLength = n * 2 - 1
// spaces = n - i

const towerBuilder = nFloors => {
  const tower = [];

  for (let i = 1; i <= nFloors; i++) {
    const spaces = nFloors - i;
    const blockCount = i * 2 - 1;

    tower.push(' '.repeat(spaces) + '*'.repeat(blockCount) + ' '.repeat(spaces));
  }

  return tower;
};

//i https://www.codewars.com/kata/57675f3dedc6f728ee000256
const towerBuilderAdvanced = (nFloors, nBlockSize) => {
  const tower = [];
  const blockWidth = '*'.repeat(nBlockSize[0]);

  for (let i = 1; i <= nFloors; i++) {
    const spaces = (nFloors - i) * nBlockSize[0];
    const blockCount = i * 2 - 1;

    for (let height = 0; height < nBlockSize[1]; height++) {
      tower.push(' '.repeat(spaces) + blockWidth.repeat(blockCount) + ' '.repeat(spaces));
    }
  }

  return tower;
};

// const blockSize = [width, height]
const blockSize = [1, 1];
const floors = 3;

console.log(towerBuilderAdvanced(floors, blockSize));
