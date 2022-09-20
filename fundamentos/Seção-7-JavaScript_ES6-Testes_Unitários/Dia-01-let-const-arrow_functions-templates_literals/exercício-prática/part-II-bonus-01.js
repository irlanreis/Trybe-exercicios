// função recursiva é uma função que chama ela mesma!

// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// n! = n x (n-1)

const factorial = (n) => {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}
console.log(`Esse é o fatorial ${factorial(5)}!`)
