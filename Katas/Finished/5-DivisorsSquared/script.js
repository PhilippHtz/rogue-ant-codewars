//i https://www.codewars.com/kata/55aa075506463dac6600010d
const divisorSquared = (m, n) => {
  const result = [];
  const squaredDivisors = nr => {
    const divisors = [];
    for (let i = 1; i <= nr; i++) {
      if (nr % i === 0) {
        divisors.push(i ** 2);
      }
    }
    const squaredDivisorSum = divisors.reduce((sum, currentValue) => sum + currentValue, 0);
    return squaredDivisorSum;
  };

  for (let i = m; i <= n; i++) {
    const squaredDivisorsSum = squaredDivisors(i);
    if (Math.sqrt(squaredDivisorsSum) % 1 === 0) {
      result.push([i, squaredDivisorsSum]);
    }
  }
  return result;
};

console.log(divisorSquared(42, 250));
