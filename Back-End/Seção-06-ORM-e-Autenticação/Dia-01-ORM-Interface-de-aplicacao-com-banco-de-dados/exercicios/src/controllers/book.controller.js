const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();
  
  res.status(200).json(books);
};

module.exports = {
  getAll,
}