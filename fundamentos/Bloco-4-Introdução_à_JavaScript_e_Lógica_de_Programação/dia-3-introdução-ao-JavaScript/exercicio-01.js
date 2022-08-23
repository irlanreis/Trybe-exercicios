/*O fatorial é a multiplicação de um número 
natural pelos seus antecessores, exceto o zero.
Por exemplo:

O fatorial é representado pelo sinal!

4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo
que retorne o fatorial de 10.*/


let numeroMult = 1;

for ( let i = 10; i > 0; i -= 1) {

    numeroMult *= i
}

console.log(numeroMult)