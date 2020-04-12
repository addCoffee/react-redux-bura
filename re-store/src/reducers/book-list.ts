import {StoreState, Action} from "./reducer";

const initialBookList = {
  books: [],
  loading: true,
  error: null,
}

const updateBookList = (state: StoreState, action: Action) => {
  if (!state) {
    return initialBookList;
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {books: [], loading: true, error: null};
    case 'FETCH_BOOKS_SUCCESS':
      return {books: action.payload, loading: false, error: null};
    case 'FETCH_BOOKS_ERROR':
      return {books: [], loading: false, error: action.payload};
    default: 
      return state.bookList;
  }
}

export default updateBookList;