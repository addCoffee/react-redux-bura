import reducer, { initialState } from '../reducers/reducer';
import {booksRequested, booksLoaded, booksError} from '../actions/actions';
import { BookModel } from '../models/Books.model';


describe('>>>R E D U C E R --- Test calculatorReducers', () => {
  let state: { books: any[]; loading: boolean; error: any; } = initialState;

  it('test reducer for BOOKS_REQUESTED', () => {
    state = reducer(state, booksRequested())
    expect(state).toHaveProperty('loading', true)
  });
  
  it('test reducer for BOOKS_LOADED', () => {
    const newBooks: BookModel[] = [{
      id: 1,
      title: 'JS AWESOME (nope)',
      author: 'Enemy JS',
      image: 'url-img',
      price: 4200,
    }];

    state = reducer(state, booksLoaded(newBooks));
    expect(state).toEqual({books: newBooks, loading: false, error: null});
  });

  it('test reducer for BOOKS_ERROR', () => {
    const errorText = 'wow, something been wrong';
    state = reducer(state, booksError(errorText));
    expect(state).toHaveProperty('error', errorText);
  });
  
  
  it('test reducer for not exist action', () => {
    const initTestState = {...state};
    state = reducer(state, { type: "NOT_EXIST_ACTION", payload: 'something'})
    expect(state).toEqual(initTestState);
  });
});