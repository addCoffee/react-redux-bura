import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from '../book/book';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError, bookAddedToCart} from '../../actions/actions';
import {BookModel} from '../../models/Books.model';
import BookstoreService from '../../services/bookstore.service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

interface BooksListContainerProps {
  books: BookModel[];
  loading: boolean;
  error: string | null;
  fetchBooks: () => void;
  bookAddedToCart: (bookId: number) => void;
}

interface BookListProps {
  books: BookModel[];
  onAdd: (bookId: number) => void;
}

function BookList({books, onAdd}: BookListProps) {
  return (
    <ul className="books">
      {
        books.map((book) => (
          <li key={book.id}>
            <Book book={book} onAdd={onAdd}/>
          </li>
        ))
      }
    </ul>
  );
}

class BookListContainer extends Component<BooksListContainerProps> {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, bookAddedToCart} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAdd={(bookId) => bookAddedToCart(bookId)}/>;
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => ({books, loading, error});

const mapDispatchToProps = (dispatch, ownProps: {bookstoreService: BookstoreService}) => {
  const {bookstoreService} = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((books: BookModel[]) => dispatch(booksLoaded(books)))
        .catch((error: string) => dispatch(booksError(error)));
    },
    bookAddedToCart: (id: number) => dispatch(bookAddedToCart(id))
  };
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
