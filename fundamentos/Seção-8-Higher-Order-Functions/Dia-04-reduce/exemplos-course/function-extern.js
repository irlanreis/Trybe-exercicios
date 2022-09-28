const numbers = [1, 32, 44, 2, 3];
// ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

//função externa
const sumNumbers = (acc, curr) => acc + curr;
const totalSum = numbers.reduce(sumNumbers, 50);
console.log(totalSum);
