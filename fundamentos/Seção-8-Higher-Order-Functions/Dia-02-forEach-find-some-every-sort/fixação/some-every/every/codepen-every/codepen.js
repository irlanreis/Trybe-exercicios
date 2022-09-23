// Array que será passado para o .every
const numbers = [1, 3, 5, 7, 9, 10];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, a callback retornará true e a frase "Todos os números são ímpares". Caso contrário, o retorno da callback é false, indicando que há um número par no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.every(isOdd)) {
    answer.innerHTML = "Todos os números são ímpares";
  } else {
    answer.innerHTML = "Pelo menos um número é par";
  }
};

const btnEvery = document.querySelector("#btn-every");

btnEvery.addEventListener("click", () => checkIsOdd(numbers));
