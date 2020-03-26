import React from 'react'
import withBookstoreService from '../hoc/with-bookstore-service'
import Book from '../book/book';

const BookList = ({bookstoreService}) => {

  const books = bookstoreService.getBooks();

  return (
    <div className="books">
      {
        books.map(book => {
          return <Book key={book.id} {...book} />
        })
      }
    </div>
  );
}

export default withBookstoreService()(BookList);
