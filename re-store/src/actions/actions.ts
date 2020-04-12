import {BookModel} from "../models/Books.model";

const booksLoaded = (newBooks: BookModel[]) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksError= (error: string) => {
  return {
    type: 'FETCH_BOOKS_ERROR',
    payload: error
  };
};

const bookAddedToCart = (bookId: number) => {
  console.log(bookId)
  return {
    type: 'BOOK_ADD_TO_CART',
    payload: bookId,
  };
};

const bookRemovedToCart = (bookId: number) => {
  return {
    type: 'BOOK_REMOVE_FROM_CART',
    payload: bookId,
  };
};

const allBookRemovedToCart = (bookId: number) => {
  return {
    type: 'ALL_BOOK_REMOVE_FROM_CART',
    payload: bookId,
  };
};

export {
  booksLoaded,
  booksRequested,
  booksError,
  bookAddedToCart,
  bookRemovedToCart,
  allBookRemovedToCart,
};