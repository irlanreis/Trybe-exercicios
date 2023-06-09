const bookController = require('./controllers/book.controller');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/books', bookController.getAll);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));