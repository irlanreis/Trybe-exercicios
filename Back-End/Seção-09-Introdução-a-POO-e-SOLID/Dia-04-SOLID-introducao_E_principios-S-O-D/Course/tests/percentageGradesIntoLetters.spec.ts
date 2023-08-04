import 'mocha';
import { expect } from 'chai';
import { percentageGradesIntoLetters } from '../src';

describe('Testando a função "percentageGradesIntoLetters"', function () {
  describe('quando é passado um array de disciplinas válidas', function () {
    const disciplines = [
      { name: "name", grade: 0.9 },
      { name: "name", grade: 0.8 },
      { name: "name", grade: 0.7 },
      { name: "name", grade: 0.6 },
      { name: "name", grade: 0.1 },
      { name: "name", grade: 0.05 },
    ];

    const student = {
      name: 'Lois',
      school: { name: 'Standard', approvalGrade: 0.7 },
      disciplines,
    };

    const resultDisciplines = percentageGradesIntoLetters(student);

    const expectedGrades = ['A', 'B', 'C', 'D', 'E', 'F']
    const giveGrades = resultDisciplines.disciplines.map(discipline => discipline.letterGrade);

    for (let i = 0; i < disciplines.length; i += 1) {
      it(`retorna ${expectedGrades[i]} para a nota ${disciplines[i].grade}`, () => {
        expect(giveGrades[i]).to.be.equals(expectedGrades[i]);
      });
    }
  })
})