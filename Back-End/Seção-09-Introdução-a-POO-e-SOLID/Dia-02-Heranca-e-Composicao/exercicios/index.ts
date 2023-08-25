import Employee from "./IEmployee";
import Person from "./Person";
import Student from "./Student";
import Subject from "./Subject";

// const maria = new Person('Maria', new Date('2000/12/16'));
// const luiza = new Person('Luiza', new Date('2008/03/05'));

// console.log(maria);
// console.log(luiza);

// const carol = new Student('Carol da Silva', new Date('2005/03/17'));

// carol.examsGrades = [25, 20, 25, 23];

// console.log(carol);

// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),

//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//     return `FNC${randomStr}`;
//   },

// };

// console.log(testInterfaceEmployee);

const math = new Subject('Matemática');

console.log(math);
