const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfpeople) => (arrayOfpeople.filter((people) => (people.age < 18)));

console.log(verifyAgeDrive(objPeople));