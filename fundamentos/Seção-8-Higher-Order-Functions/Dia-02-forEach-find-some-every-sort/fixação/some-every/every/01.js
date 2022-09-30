//O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:

const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  //Observe que foi usado Object.values junto com o every. Como o Object.values retorna um array apenas com os valores do objeto, o every percorrerá esse array retornado. Interessante essa combinação de funções, hein?! Experimente alguma combinação dessas na sua própria máquina agora!
  
  console.log(verifyGrades(grades));