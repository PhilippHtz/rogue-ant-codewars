//i https://www.codewars.com/kata/513e08acc600c94f01000001
const rgbToHex = (r, g, b) => {
  const arr = [r, g, b];
  arr.forEach((colorValue, index) => {
    if (colorValue < 0) arr[index] = 0;
    if (colorValue > 255) arr[index] = 255;
  });

  const decimalToHex = decimal => {
    let hexString = '';
    const hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    if (decimal === 0) {
      return '00';
    }

    if (decimal < 16) {
      return '0' + hexDigits[decimal];
    }

    while (decimal > 0) {
      let remainder = decimal % 16;
      hexString = hexDigits[remainder] + hexString;
      decimal = Math.floor(decimal / 16);
    }

    return hexString;
  };

  const redHex = decimalToHex(arr[0]);
  const greenHex = decimalToHex(arr[1]);
  const blueHex = decimalToHex(arr[2]);

  return redHex + greenHex + blueHex;
};

console.log(rgbToHex(85, 173, 15));
