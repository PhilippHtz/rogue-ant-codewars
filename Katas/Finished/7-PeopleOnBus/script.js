//i https://www.codewars.com/kata/5648b12ce68d9daa6b000099
const peopleOnBus = busStops => {
  let numberOfPeople = 0;
  busStops.forEach(busStop => {
    numberOfPeople = numberOfPeople + busStop[0] - busStop[1];
  });

  return numberOfPeople;
};
