const myList = [5, 2, 3, 9];
const List = [23, 34, 56, 76];
const ist = [45, 6565, 787, 8099];
const st = ['a','b','c','d'];

//return esperado [3, 2, 5].

const swap = ([a, b, c, s]) => [s, c, b, a]

console.log(swap(myList))
console.log(swap(List))
console.log(swap(ist))
console.log(swap(st))