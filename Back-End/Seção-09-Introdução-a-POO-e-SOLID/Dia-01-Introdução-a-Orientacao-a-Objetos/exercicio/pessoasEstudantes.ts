class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment,
      this._name = name,
      this._examsGrades = [],
      this._assignmentsGrades = []
  };

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres.')
    }
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas');
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length > 2 ) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      )
    }
    this._assignmentsGrades;
  }

  sumGrades(): number {
    return [...this._examsGrades, ...this._assignmentsGrades]
    .reduce((previousNote, note) => {
      const nextNote = note + previousNote;
      return nextNote;
    }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;
    return Math.round(sumGrades / divider);
  }
}

const personOne = new Student('202001012', 'Irlan');

personOne.examsGrades= [10, 20, 300, 48];
// personOne.assignmentsGrades = [0, 0]

console.log(personOne.sumGrades());
console.log(personOne.sumAverageGrade());

