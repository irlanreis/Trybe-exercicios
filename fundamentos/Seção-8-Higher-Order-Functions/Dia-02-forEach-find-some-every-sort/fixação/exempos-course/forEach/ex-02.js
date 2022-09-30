const numbers = [11, 24, 39, 47, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMultipleOf5 = numbers[index];
    break;
  }
}
console.log(`Achei!O primeiro número divisível por 5 é ${firstMultipleOf5}!`)
//Agora, a mesma coisa usando Array.find:
const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const firstMultipleOf3 = numbers2.find((number) => number % 3 === 0);

console.log(`Achei!O primeiro número divisível por 3 é ${firstMultipleOf3}!`);


