const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
//No exemplo acima, foi executada, para cada elemento do array, a função multipliesFor2, que imprime o parâmetro element * 2 no console.