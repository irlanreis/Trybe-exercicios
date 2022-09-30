reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )

//para trabalhar com uma função de reduce você deve ter algo parecido com o código abaixo:
array.reduce((acc, curr) => {
    // escopo de execução da função
}, valorInicial)

//O accumulator e o currentValue são parâmetros da CALLBACK.