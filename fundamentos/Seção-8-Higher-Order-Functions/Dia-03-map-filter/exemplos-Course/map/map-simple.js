const numbers = [1, 2, 3, 4, -5];

const negattiveNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));
console.log(negattiveNumbers);
//práticando com método sort;
console.log(negattiveNumbers.sort((a, b) => a - b))


// mesma operaração com for normal
const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = [];
for (let index = 0; index < numbers2.length; index += 1) {
  if (numbers2[index] > 0) {
    negativeNumbers2.push(numbers2[index] * -1);
  } else {
    negativeNumbers2.push(numbers2[index]);
  }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers2); // [ 1, 2, 3, 4, -5 ]
