const numbers = [1, 2, 3, 4, 5, 6];
const bigggerThanThree = numbers.filter((number) => number > 3);
console.log(bigggerThanThree);

const withoutThree = numbers.filter((number) => number !== 3);
console.log(withoutThree);
