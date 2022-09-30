const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);
 // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

 const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
 console.log(newListStudents);

//  Observe que o filter foi usado dentro de uma função que recebe dois parâmetros, o array de valores e uma string, o que será removido. A condição de dentro do filter é para retornar sempre que o elemento for diferente do name passado. Se tiver ficado confuso, rode esse código por conta própria e altere um pouco o seu funcionamento! Isso ajudará muito.