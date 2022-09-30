const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
console.log(isEven);
//Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 3 === 0);
console.log(isEven2);