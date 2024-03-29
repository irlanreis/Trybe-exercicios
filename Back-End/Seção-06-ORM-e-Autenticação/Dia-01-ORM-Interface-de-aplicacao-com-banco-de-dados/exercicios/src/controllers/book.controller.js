const bookService = require('../services/book.service');

const BOOK_ERROR  = 'Book not found';

const getAll = async (req, res) => {
  const { author } = req.query;
  let books;

  if (author) {
    books = await bookService.getByAuthor(author);
  } else {
    books = await bookService.getAll()
  }
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await bookService.getById(id);

  if (!book) return res.status(400).json({ message: BOOK_ERROR });
  return res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const book = await bookService.create({ title, author, pageQuantity, publisher });
  return res.status(201).json(book);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;
  const updateUser = await bookService.update(id, { title, author, pageQuantity, publisher });

  if (!updateUser) return res.status(404).json({ message: BOOK_ERROR });

  return res.status(201).json({ message: 'Book updated' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await bookService.remove(id);

  if (!removed) return res.status(404).json({ message: BOOK_ERROR });

  return res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}