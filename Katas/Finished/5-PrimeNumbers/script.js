//i https://www.codewars.com/kata/52dd72494367608ac1000416
const isPrime = number => {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimes = (n, m) => {
  const result = [];

  if (n > m) {
    let i = n;
    n = m;
    m = i;
  }

  for (let i = n; i <= m; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(isPrime(0), getPrimes(30, 0));
