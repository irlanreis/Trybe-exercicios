//Com a desestruturação de array, podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
