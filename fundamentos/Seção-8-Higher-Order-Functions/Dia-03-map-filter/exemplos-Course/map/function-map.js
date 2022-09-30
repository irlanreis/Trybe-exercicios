const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

//A função juntou o primeiro nome com o sobrenome de cada pessoa e retornou um array novo com cada um dos valores. Observe que o tamanho dos arrays persons e fullNames é o mesmo (3 elementos).

//Outro exemplo é o de realizar um cálculo utilizando os valores dos elementos e retornar um array novo sem alterar o anterior.

// Na animação abaixo, podemos observar que o método map está invocando uma função callback que multiplica cada elemento do array listaNumeros por dois. O retorno do map é um novo array (dobro) que contém o resultado da multiplicação de cada elemento do array listaNumeros por dois. Perceba que o array retornado tem exatamente a mesma quantidade de itens que o array original, que não sofreu nenhuma modificação!