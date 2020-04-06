import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from '../book/book';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded, booksRequested, booksError} from '../../actions/actions';
import {BookModel} from '../../models/Books.model';
import BookstoreService from '../../services/bookstore.service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

interface BooksListProps {
  books: BookModel[];
  loading: boolean;
  error: string | null;
  bookstoreService: BookstoreService;
  booksLoaded: Function;
  booksRequested: Function;
  booksError: Function;
}

class BookList extends Component<BooksListProps> {

  componentDidMount() {
    const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
    booksRequested();
    bookstoreService.getBooks()
    .then((books) => booksLoaded(books))
    .catch((error) => booksError(error));
  }

  render() {
    const {books, loading, error} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="books">
        {
          books.map((book) => {
            return <li key={book.id}><Book {...book} /></li>
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
const mapDispatchToProps = {booksLoaded, booksRequested, booksError};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
