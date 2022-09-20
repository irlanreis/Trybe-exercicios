const fatorial = (n) => {
    let result = 1
    for (let c = n; c > 1; c -= 1) {
        result *= c
    }
    return result
}
console.log(`Esse é o fatorial ${fatorial(6)}`);