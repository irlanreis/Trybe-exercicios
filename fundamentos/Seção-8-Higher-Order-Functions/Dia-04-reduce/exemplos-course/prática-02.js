const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (accumulator, number) => (
//O que essa função faz exatamente?
  (number % 2 === 0) ? accumulator + number : accumulator);
const sumNumbers = (array) => array.reduce(sumPair, 0);
console.log(sumNumbers(numbers2))
; // 152
