const { expect } = require('chai');
const { Book } = require('../../src/models');

describe('O model de Books', function () {
  it('Possui a propriedade "title"', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('Possui a propriedade "author"', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('Possui a propriedade "pageQuantity"', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });
  
  it('Possui a propriedade "publisher"', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
}) 

// Exemplo de teste do model usando o sequelize-test-helpers;

// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// const BookModel = require('../../models/Book');

// describe('O model de Book', () => {
//   const Book = BookModel(sequelize, dataTypes);
//   const book = new Book();

//   describe('possui o nome "Book"', () => {
//     checkModelName(Book)('Book');
//   });

//   describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
//     ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
//   });
// });