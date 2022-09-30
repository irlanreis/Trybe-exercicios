
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
    folga: ['Monday']
  };
  
  //Temos um objeto daysOfWeek que contém as chaves workDays e weekend. Precisamos agora extrair os valores dessas chaves e, para isso, vamos utilizar a desestruturação de objetos:
  const { workDays, weekend, folga } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']
// console.log(folga); // ['Saturday', 'Sunday']

//Feita a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.
const weekdays = [...workDays, ...weekend,...folga];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']