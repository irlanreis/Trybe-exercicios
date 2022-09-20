const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sorteArrayBonus = (array) => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
};
const sortedArrayBonus = sorteArrayBonus(oddsAndEvens);
console.log(`Os numeros ${sortedArrayBonus} se encontram ordenados de forma crescente!`) // será necessário alterar essa linha 😉

