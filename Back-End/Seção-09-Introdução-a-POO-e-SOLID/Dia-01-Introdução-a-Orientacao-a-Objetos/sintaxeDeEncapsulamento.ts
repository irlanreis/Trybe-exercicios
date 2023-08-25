class Persona {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(
    name: string,
    heigth: number,
    weight: number,
    age: number
  ) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = heigth;
  }

  // esta sintaxe permite acessar o valor retornado via person.getWeight();
  getWeight() {
    return this._weight;
  }

  // esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)

  get age() {
    return this._age
  }

  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    } else {
      'Valor inválido!'
    }

    
  }

  birthday() {
    this._age += 1;
  }
}

const person1 = new Persona('Maria', 171, 58, 19);
const person2 = new Persona('João', 175, 66, 18);

person1.name = 'Cripto'

// console.log(person2.age);

// person2.birthday()
// console.log(person2.age);
person1.age = 300;
console.log(person1);


