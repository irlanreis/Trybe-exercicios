//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 15;
let anguloB = 65;
let anguloC = 100;

let somaNumeros = anguloA + anguloB + anguloC ;

let angulosPositives = anguloA > 0 && anguloB > 0 && anguloC > 0; 

if ( angulosPositives ) {
    if ( somaNumeros === 180 ) {
    console.log ( true )
} else {
    console.log( false )
};
} else {
    console.log ( 'Erro: ângulo inválido' )
}
