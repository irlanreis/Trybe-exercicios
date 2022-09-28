const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];

//vamos usar reduce para somar todos os valores de cada array no indentificador grades, reduzindo o array à uma nota;
//a media das notas virá a partir da soma e divisão de cada array no identiicador grades;
//transformar cada array e cada string em um único objeto a cada iteração.
//finalizar com map para retornar um novo array com os objetos dos estudantes.


const studentsAverage = () => {
    //Começamos com o map que será responsável por mapear o index e devolver a resposta no formato correto.
    return nameAndAverage = students.map((student, index) => ({
        name: student,
        //Sobre o array que acessamos com o index criaremos um reduce com valor inicial de acc igual a zero, e ele deve somar todas as notas.
        average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
    }

    ));
}
console.log(studentsAverage());