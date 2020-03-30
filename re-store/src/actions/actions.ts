import {BookModel} from "../models/Books.model";

const booksLoaded = (newBooks: BookModel[]) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export {
  booksLoaded
};