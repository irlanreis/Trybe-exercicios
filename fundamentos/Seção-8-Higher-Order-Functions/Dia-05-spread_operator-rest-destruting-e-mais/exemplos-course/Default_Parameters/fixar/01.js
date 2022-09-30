const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
const { firstName, lastName} = person

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = 'Brasilian'}) => `${firstName} is ${nationality}`;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian