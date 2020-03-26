import { Book } from "src/models/Books.model";

const booksLoaded = (newBooks: Book[]) => {
  return {
    type: 'BOOKED_LOADED',
    payload: newBooks,
  };
};

export {
  booksLoaded
};