import {BookModel, CartItem} from "../models/Books.model";
import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

export interface StoreState {
  bookList: {
    books: BookModel[],
    loading: boolean,
    error: null | string,
  };
  cartItems: CartItem[];
}

export interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: StoreState, action: Action): StoreState => {
  return {
    bookList: updateBookList(state, action),
    cartItems: updateShoppingCart(state, action),
  };
};

export default reducer;