const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

//Não se esqueça, também, de rodar todos os exemplos no console do seu navegador ou na sua máquina! Isso ajuda muito a fixar as coisas. Brinque e experimente com as funções!