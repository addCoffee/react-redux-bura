import React, {Component} from 'react';
import {connect} from 'react-redux';

import Book from '../book/book';
import withBookstoreService from '../hoc/with-bookstore-service';
import {booksLoaded} from '../../actions/actions';
import {BookModel} from '../../models/Books.model';

interface BooksListProps {
  books: BookModel[];
  bookstoreService: any;
  booksLoaded: Function;
}

class BookList extends Component<BooksListProps> {
  componentDidMount() {
    const {bookstoreService, booksLoaded} = this.props;
    const newBooks = bookstoreService.getBooks();
    booksLoaded(newBooks);
  }

  render() {
    const {books} = this.props;

    return (
      <ul className="books">
        {
          books.map(book => {
            return <li key={book.id}><Book {...book} /></li>
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books}) => ({books});
const mapDispatchToProps = {booksLoaded};

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
