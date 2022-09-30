//Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const containsA = () => {
  //Podemos começar esse exercício utilizando um forEach para percorrermos cada um dos nomes presentes no array names, pois precisamos contar a quantidade das letras a e A em cada um. Além disso, podemos criar uma variável que irá armazenar o total de letras a e A encontrado até o momento. Chamaremos essa variável de totalOfLettersA
  let totalOFLetrasA = 0;

  names.forEach((name) => {
    //Para cada nome, precisamos fazer algumas operações. A primeira delas é transformar esse nome de string para um array. Isso irá permitir a aplicação de uma HoF (reduce) nesse nome, pois ele irá se transformar em um array de caracteres. Para isso, podemos utilizar a função split(), passando como parâmetro uma string vazia, em name e armazenar esse resultado em uma variável (lettersFromName).
    const lettersFromName = name.split('')
    //Feito isso, podemos aplicar o coneceito da função reduce no array de caracteres lettersFromName. O nosso objetivo aqui é reduzir esse array de caracteres em um número. E qual número é esse? A quantidade de letras a ou A que aparecem naquele nome. Vamos olhar para a função reduce em detalhes. O primeiro parâmetro do reduce é uma callback function que precisa de dois parâmetros. O primeiro é o acumulador e o segundo é o valor atual. Para o acumulador, daremos o nome de lettersAInName e esse parâmetro irá guardar a quantidade de letras a ou A naquele nome. O segundo parâmetro, podemos chamar de currentLetter, ou seja, esse parâmetro irá conter a cada iteração um caractere daquele nome. A função reduce também pode receber um segundo parâmetro que é o valor inicial para o acumulador. Como o nosso acumulador irá armazenar a quantidade de letras a ou A, podemos passar como valor inicial para o acumulador o número zero e, a medida que encontrarmos uma letra que satisfaça a nossa condição, incrementamos esse valor no acumulador.
    totalOFLetrasA += lettersFromName.reduce((lettersAInName, currentLetter) => {
      //Dentro da callback function passada como parâmetro para a função reduce devemos implementar a lógica que nos ajudará a contar a quantidade de letras a e A em cada um dos nomes. Para isso podemos fazer uma verificação a cada iteração do nosso reduce. Se o valor atual, ou seja, o caractere atual daquele nome for igual à letra a ou à letra A, retornamos o valor do nosso acumulador mais um, o que indica que encontramos mais uma letra a ou A naquele nome. Caso contrário, retornamos o que já está no nosso acumulador.
      if (currentLetter === 'a' || currentLetter === 'A') {
        return lettersAInName + 1;
      }
      return lettersAInName;
    }, 0);
  });
  //Por último, precisamos retornar o valor que armazenamos na variável totalOfLettersA. Essa variável irá conter exatamente o valor total de letras a e A em todos os nomes presentes no array names.
  return totalOFLetrasA;
}
console.log(containsA());