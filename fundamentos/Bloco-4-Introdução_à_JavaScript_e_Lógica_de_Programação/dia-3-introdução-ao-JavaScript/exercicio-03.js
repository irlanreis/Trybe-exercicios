/*Escreva dois algoritmos: um que retorne a maior 
palavra deste array e outro que retorne a menor. 
Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > bigWord.length) {
        bigWord = array[index];
    }
}
for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}

console.log(bigWord);
console.log(smallestWord);