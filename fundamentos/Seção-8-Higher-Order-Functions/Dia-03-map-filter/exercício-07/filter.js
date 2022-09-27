const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const authorWith3DotsOnName = () => {
    //Devemos primeiro encontrar o nome do livro que contenha três pontos no início. O primeiro caractere ponto vem no índice 1. Após esse caractere temos um espaço, outra letra e então o outro ponto, que se encontra no índice 4. O terceiro ponto segue a mesma lógica e fica no índice 7. Vamos colocar essa condicional dentro da callback function da função find
    return books.find((book) => (book.author.name[1] === '.'
        && book.author.name[4] === '.'
        && book.author.name[7] === '.')).name
    //Agora, como resultado da função find, temos o objeto de um livro com todas as suas informações. Porém, queremos somente o nome desse livro. Podemos utilizar a notação por ponto para acessar a propriedade name desse objeto. Dessa forma, nossa função irá retornar somente o nome do livro encontrado pela função find.
};
console.log(authorWith3DotsOnName());


//outra forma de resolver seria;
const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName2() {

    return books.find((book) => (
        book.author.name.split(' ')
            .filter((word) => word.endsWith('.')).length === 3
    )).name;
}
console.log(authorWith3DotsOnName2());