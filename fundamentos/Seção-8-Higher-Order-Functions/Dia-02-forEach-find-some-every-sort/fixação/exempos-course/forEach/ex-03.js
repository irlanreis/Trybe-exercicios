//As Higher Order Functions são parecidas entre si: elas mudam em alguns pontos específicos, mas todas possuem a mesma estrutura. Para demonstrar, olhe o exemplo de uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element) => {

  console.log('Cada elemento do array:', element);

});
//Sua estrutura:
arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
  });

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }