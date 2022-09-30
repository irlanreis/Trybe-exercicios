//“E se a chave do objeto contiver outro objeto como valor?” Veja o exemplo abaixo e entenda como podemos resolver esse problema:

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
      population: '200000',
    },
  };
//Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(). Para isso, vamos utilizar a desestruturação de objetos:

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
//imprimindo valores;
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e,por incrível que pareça, ele ${jedi ? 'é um jedi' : 'não é um jedi'}.`)
