const array = [1, 2, 3, 4, 5]

const aninhaMetodos = (arr) => arr.filter(element => element % 2 !== 0)
.map(element => element * 5)
.reduce((acc, curr) => acc + curr);
console.log(aninhaMetodos(array));