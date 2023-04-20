const express = require('express');

const app = express();
app.use(express.json());

app.post('/activites', async (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
})

module.exports = app;