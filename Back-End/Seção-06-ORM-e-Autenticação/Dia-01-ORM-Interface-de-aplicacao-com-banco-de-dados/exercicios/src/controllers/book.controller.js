const bookService = require('../services/book.service');

const getAll = async (_req, res) => {
  const books = await bookService.getAll();
  
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(400).json({ message: 'Book not found' });
  
  return res.status(200).json(book);
};

module.exports = {
  getAll,
  getById,
}