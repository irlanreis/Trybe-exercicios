/*Ordene o array numbers em ordem crescente e 
imprima seus valores;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    for (let segundoIndex = 0; segundoIndex < index; segundoIndex += 1){
        if (numbers[index] < numbers[segundoIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[segundoIndex];
            numbers[segundoIndex] = position;
            
        }
    }
}

console.log(numbers)