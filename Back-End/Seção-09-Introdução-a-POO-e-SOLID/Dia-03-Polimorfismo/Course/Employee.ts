class Employee {
  // Atributo estático que pertence a classe.
  private static employeeCount = 0;

  /* Aqui temos o exemplo de um atributo comum que, em contraste com o atributo estático,
    é utilizado pelas instâncias e não pela classe */
  private employeeName: string;

  constructor(name: string) {
    Employee.addEmployee();
    this.employeeName = name;
  }

  /* Aqui temos o exemplo de método comum que, em contraste com o método estático,
   é utilizado pelas instâncias e não pela classe */
   public getName(): string {
     // Novamente o this se referindo a instância
     return this.employeeName;
   }


  // Esse é um método exclusivo da classe, por isso estático
  private static addEmployee() {
    Employee.employeeCount += 1;
    console.log(`Total de pessoas funcionárias: ${Employee.employeeCount}`);
  }
}

const employee1 = new Employee('Deus proverá!');
const employee2 = new Employee('servo do senhor!')
const employee3 = new Employee('Varão de Guerr!')
console.log(employee1.getName())