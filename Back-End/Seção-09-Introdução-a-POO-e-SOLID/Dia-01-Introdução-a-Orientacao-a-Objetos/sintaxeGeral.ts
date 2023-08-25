// Sintaxe geral de como fica a criação de classes, atributos e métodos em TypeScript.

class Person  {
  name: string;
  height: number;
  weight?: number; // O caractere "?" indica um atributo opcional;

  constructor(n: string, h: number, w?: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: ZzzzZzzzz`);
  }
}

const p1 = new Person('Maria', 163, 80);

// Aqui estamos passando somente dois parametros, atente-se ao valor do atributo p2.weight;
const p2 = new Person('João', 180);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 undefined
Maria: zzzzzzz
João: zzzzzzz
*/