// Arranja os middlewares para chamar validateTeam primeiro
const validateTeam = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
  next(); // Chama o próximo middleware
}
module.exports = validateTeam;