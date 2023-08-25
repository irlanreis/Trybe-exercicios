abstract class AbstractEmployees {
  constructor(public name: string) { }

  /* Aqui temos um atributo abstrato que implica às classes
   filhas atribuírem, de maneira obrigatória, um valor do tipo 'number' */
  abstract MIN_SALARY: number;

  /* Já aqui temos um método abstrato que implica às classes filhas 
  implementá-la, de maneira obrigatória, de acordo com a utilidade da classe filha  */
  abstract work(): void;
}

class Instructor extends AbstractEmployees {
  constructor(public name: string) {
    super(name);
  };

  MIN_SALARY = 10000;

  work(): void {
    console.log(`${this.name} está auxiliando as pessoas em mentorias. Ganha ${this.MIN_SALARY} mensais!`);
  };
}

class Specialist extends AbstractEmployees {
  constructor(public name: string) {
    super(name);
  };

  MIN_SALARY = 20000;

  work(): void {
    console.log(`${this.name} está ministrando uma aula ao vivo.${this.MIN_SALARY} mensais!`);
  };
}

class Facilitator extends AbstractEmployees {
  constructor(public name: string) {
    super(name);
  };

  MIN_SALARY = 50000;

  work(): void {
    console.log(`${this.name} está conduzindo um 1:1.${this.MIN_SALARY} mensais!`);
  };
}

const instructor = new Instructor('Vitor');
const specialist = new Specialist('Gus');
const facilitator = new Facilitator('Silvinha');

instructor.work();
specialist.work();
facilitator.work();