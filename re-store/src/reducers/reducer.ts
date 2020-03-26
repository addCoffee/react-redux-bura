const initialState = {
  books: [],
}

interface Action {
  type: string;
  payload?: unknown;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {...state, books: action.payload};
    default:
      return state;
  }
}

export default reducer;