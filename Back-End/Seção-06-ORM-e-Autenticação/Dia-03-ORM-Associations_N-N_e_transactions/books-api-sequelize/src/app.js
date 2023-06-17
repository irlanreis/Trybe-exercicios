const userBookController = require('./controllers/userBook.controller');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/userbook/:id', userBookController.getUsersBooksById);

module.exports = app;
