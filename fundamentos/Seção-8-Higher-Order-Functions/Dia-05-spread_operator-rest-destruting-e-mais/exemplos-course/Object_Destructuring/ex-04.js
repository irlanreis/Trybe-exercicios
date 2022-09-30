//Outro truque legal dessa feature é que você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável.
const student = {

    a: 'Maria',
    b: 'Turma B',
    c: 'Matemática'
};

 const { a: name, b: classAssingned, c: subject } = student;

console.log(name);
console.log(classAssingned);
console.log(subject);
