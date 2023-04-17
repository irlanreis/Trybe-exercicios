const express = require('express');

const app = express()
app.use(express.json())

let nextId = 3;

const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

app.get('/teams', (req, res) => res.json(teams))

// Sem o uso de Middlewares;

// app.get('/teams/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find(t => t.id === id);
//     if (team) {
//       res.json(team);
//     } else {
//       res.sendStatus(404);
//     }
//   });
  
//   app.post('/teams', (req, res) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//       const team = { id: nextId, ...req.body };
//       teams.push(team);
//       nextId += 1;
//       res.status(201).json(team);
//     } else {
//       res.sendStatus(400);
//     }
//   });

//   app.get('/teams/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const team = teams.find(t => t.id === id);
//     if (team) {
//       res.json(team);
//     } else {
//       res.sendStatus(404);
//     }
//   });
  
//   app.post('/teams', (req, res) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//       const team = { id: nextId, ...req.body };
//       teams.push(team);
//       nextId += 1;
//       res.status(201).json(team);
//     } else {
//       res.sendStatus(400);
//     }
//   });

const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];

    if (requiredProperties.every((property) => property in req.body)) {
        next(); // Chama o próximo middleware
    } else {
        res.sendStatus(400); // Ou já responde avisando que deu errado
    }
};


module.exports = app;