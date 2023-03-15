const express = require('express');
const { readFile } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readfile = async () => {
    try {
        const data = await fs.readFile(moviesPath);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Arquivo não pôde ser lido: ${error}`);
    };
};

readfile();

app.get('movies/search', async (req, res) => {
    try {
        const { q } = req.query;
        const movies = await readfile();

        if(q) {
            const filteredMovies = movies.filter((element) => element.movie.includes(q));
            return res.status(200).json(filteredMovies);
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

app.get('/movies/:id', async (req, res) => {
    try {
        const movies = await readfile();
        const movie = movies.find(({ id }) => id === Number(req.params.id));
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await readfile()
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send({ message: error.message })
    };
});

app.post('/movies', async (req, res) => {
    try {
        const { movie, price } = req.body;
        const movies = await readfile();

        const newMovie = {
            id: movies[movies.length -1].id +1,
            movie,
            price,
        };

        const allMovies = JSON.stringify([...movies, newMovie])

        await fs.writeFile(moviesPath, allMovies);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).send({ message: error.message })
    };
});

app.put('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { movie, price } = req.body;

        const movies = await readfile();
        // Localiza o index correspondente ao id do parametro da requisição.
        const index = movies.findIndex((element) => element.id === Number(id));
        // Altere o valor do elemento pelo que foi fornecido pelo corpo da requisição.
        movies[index] = { id: Number(id), movie, price };

        // Faz o parse das informações para string JSON.
        // Os dois últimos parâmetros passados no método stringify são opcionais e têm por objetivo melhorar a formatação do arquivo JSON.
        const updateMovies = JSON.stringify(movies, null, 2);
        // Escreve no arquivo movies.json o conteúdo atualizado.
        await fs.writeFile(moviesPath, updateMovies);
        // utiliza o método status para enviar o código de resposta HTTP 200 e retorna o filme atualizado em formato json para o cliente como resposta.
        res.status(200).json(movies[index]);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const movies = await readfile();

        const filteredMovies = movies.filter((movie) => movie.id !== Number(id));

        const updateMovies = JSON.stringify(filteredMovies, null, 2);
        await fs.writeFile(moviesPath, updateMovies)

        res.status(204).end();
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})


module.exports = app;