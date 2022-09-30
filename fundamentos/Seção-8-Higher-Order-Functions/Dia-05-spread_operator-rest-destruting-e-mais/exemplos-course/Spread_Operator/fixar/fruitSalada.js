// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'leite condensado', 'farinha láctea'];

const fruitSalad = () => {
  const salada = [...specialFruit, ...additionalItens]
  return salada;
};

console.log(fruitSalad());