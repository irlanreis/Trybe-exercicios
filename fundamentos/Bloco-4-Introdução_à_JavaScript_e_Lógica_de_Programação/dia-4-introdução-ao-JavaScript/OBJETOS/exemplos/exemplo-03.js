/*Esse último bloco de código é um exemplo de um array composto
por objetos. Os objetos desejados foram acessados através dos seus
índices e armazenados dentro de variáveis para facilitar a compreensão.
Perceba que o nome que escolhemos para a função é um nome composto, 
e para a escrita de nomes compostos em JavaScript existem algumas 
convenções. Uma delas é a kebab case, onde o nome fica separado 
por um traço. Apesar de ser uma convenção, não é uma boa prática de escrita, 
pois muitas linguagens interpretam o traço como um sinal de
subtração, o que pode ocasionar bugs.
Você se lembra das regras de nomeação de variáveis? 
As mesmas se aplicam aqui. O recomendado é usar nomes descritíveis
para as propriedades, além de escrevê-las no estilo camelCase.*/

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey