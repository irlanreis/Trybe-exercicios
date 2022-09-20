const testingScope = (escopo) => {
    if (escopo === true) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    for (let i = -1; i < oddsAndEvens.length; i += 1) {
        for (let index = 0; index < i; index += 1) {
            if (oddsAndEvens[i] < oddsAndEvens[index]) {
                let position = oddsAndEvens[i]
                oddsAndEvens[i] = oddsAndEvens[index]
                oddsAndEvens[index] = position
            }
        }
    }
    return oddsAndEvens;
}
console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
