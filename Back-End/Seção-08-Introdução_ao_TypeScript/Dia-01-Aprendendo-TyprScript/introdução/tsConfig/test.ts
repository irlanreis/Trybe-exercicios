// Tipando objetos

function printPersonalinfo(data: { name: string, birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
};

printPersonalinfo({ name: 'Rogerinho', birthYear: 1978 });

// Tipando variáveis

const firstName: string = "Joãozin";
const age: number = 22;
const brasilian: boolean = true;

// Tipagem no parâmetro da função

function greet(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
};

// Tipando arrays

const evenNumbers: number[] = [1, 2, 3];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

