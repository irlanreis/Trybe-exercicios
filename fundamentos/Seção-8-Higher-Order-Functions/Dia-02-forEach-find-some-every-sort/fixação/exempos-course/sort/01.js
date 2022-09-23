// A forma como ela organiza os elementos do array não é tão intuitiva. Isso ocorre, pois ela distribui sempre por ordem alfabética. No caso, quando há elementos como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres unicode!

//Agora, se deseja ordenar de forma numérica crescente, é necessário passar a função a seguir:

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]

//A lógica é a seguinte: a função recebe, da sort, todos os elementos do array, em pares (elemento1, elemento2), e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */). Ou seja: para o array [1, 2, 3, 4], a função receberá (2, 1), (3, 2), (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1. Novamente, o artigo do MDN é uma excelente fonte de informação para entender melhor.

//Agora se realizarmos uma simples modificação no retorno da função que ordena os números, veja o que acontece:

const points2 = [40, 100, 1, 5, 25, 10];
points2.sort((a, b) => b - a);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]