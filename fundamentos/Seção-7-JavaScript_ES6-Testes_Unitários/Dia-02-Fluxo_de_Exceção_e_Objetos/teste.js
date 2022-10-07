const objectPerson = {
    name1: 'Irlan',
    name2: 'Jaqueline',
    lastName1: 'Reis',
    lastName2: 'Oliveira'
}
const obj = { 
    value: 1,
    value1: 2 
}

const clone = Object.assign(objectPerson, obj);
// console.log(Object.keys(clone))
// console.log(Object.values(clone))
// console.log(Object.entries(clone))

const {name1, lastName1} = objectPerson;
const {name2, lastName2} = objectPerson;

console.log(`Oi eu sou o ${name1} ${lastName1}`);
console.log(`Oi eu sou a ${name2} ${lastName2}`);

// console.log(clone);