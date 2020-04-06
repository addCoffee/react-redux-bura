const initialState = {
  books: [],
  loading: true,
  error: null,
}

interface Action {
  type: string;
  payload?: unknown;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {...state, books: [], loading: true, error: null};
    case 'BOOKS_LOADED':
      return {...state, books: action.payload, loading: false, error: null};
    case 'BOOKS_ERROR':
      return {...state, books: [], loading: false, error: action.payload};
    default:
      return state;
  }
}

export default reducer;