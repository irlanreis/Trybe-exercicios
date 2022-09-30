   //Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined. E se você quisesse dar um valor padrão para alguma chave, caso essa propriedade não exista no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6:

   // Passando um valor default para a desestruturação de `nationality` sendo "Brazilian" então todo objeto que passarmos terá esse valor, caso não seja passado algum outro.
   const getNationality = ({ firstName, nationality = 'Brasilian' }) => `${firstName} is ${nationality}`;

   const person = {
     firstName: 'João',
     lastName: 'Jr II',
   };
   
   const otherPerson = {
     firstName: 'Ivan',
     lastName: 'Ivanovich',
     nationality: 'Russian',
   };
   
   console.log(getNationality(otherPerson)); // Ivan is Russian
   console.log(getNationality(person));