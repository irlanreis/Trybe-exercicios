const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //função para adicionar o turno da noite na lesson2.
  const addNewKey = (obj, key, value) => {
    obj[key] = value; // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
  };
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2)


  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listKeys = (obj) => Object.keys(obj);
  // O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.
  console.log(listKeys(lesson1));


  //Crie uma função para mostrar o tamanho de um objeto.
  const sizeObj = (obj) => Object.keys(obj).length;
  // Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
  console.log(sizeObj(lesson1));


  //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  const listValues = (obj) => Object.values(obj);
  // Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()".
  console.log(listValues(lesson1));


  //Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  // O método "Object.assign()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.
  console.log(allLessons);


  //Crie uma função que retorne o número total de estudantes em todas as aulas.
  const getNumberOfStudents = (obj) => {
    // essa será a função responsável pela lógica e ela receberá um objeto como parâmetro.

    let total = 0; // começamos a contagem de alunos com 0;

    const array = Object.keys(obj); // pegamos as chaves do objeto;

    for (index in array) { // for in para iterar sobre o array de chaves

        total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  }
  console.log(getNumberOfStudents(allLessons));

  
  //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));


//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

// Primeiro passo: Crie a função verifyPair que irá receber por parâmetro:

// O objeto;
// O nome da chave;
// O valor a ser comparado;
const verifyPair = (obj, key, value) => {
    //Segundo passo: Armazene as entradas do objeto em uma variável através do método Object.entries.
    const arr = Object.entries(obj);

    //Terceiro passo: Crie uma variável que irá armazenar se o par (chave/valor) passado por parâmetro existe no objeto.
    let isEqual = false;

    //Quarto passo: Utilize o for/in para iterar sobre a variável arr.
    for (let index in arr) {
        //Quinto passo: Se o par (chave/valor) passado por parâmetro existir no objeto altere o valor da variável isEqual para true.
        if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
