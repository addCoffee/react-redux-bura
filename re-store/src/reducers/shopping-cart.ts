import {Action, StoreState} from "./reducer";
import {CartItem, BookModel} from "../models/Books.model";

const updateCartItem  = (cardItem: CartItem, quantity: number, book: BookModel) => {
  const {count = 0, price = book.price, total = 0} = cardItem;
  return {
    ...book, 
    count: count + quantity,
    total: total + (quantity * price),
  }
}

const updateCartItems = ({cartItems}: StoreState, newCartItem: CartItem, idx: number): CartItem[] => {
  if (newCartItem.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }
  if (idx === -1) {
    return [
      ...cartItems.slice(),
      newCartItem,
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    newCartItem,
    ...cartItems.slice(idx + 1),
  ];
};

const updateOrder = (state: StoreState, bookId: number, quantity: number) => {
  const {cartItems, bookList: {books}} = state;

  const foundCartItemIndex = cartItems.findIndex(({id}) => id === bookId);
  const foundCartItem = foundCartItemIndex !== -1 && cartItems[foundCartItemIndex];
  const foundBook = books.find(({id}) => id === bookId);

  const newCartItem = updateCartItem(foundCartItem, quantity, foundBook);
  return updateCartItems(state, newCartItem, foundCartItemIndex);
};

const updateShoppingCart = (state: StoreState, action: Action) => {
  if (!state) {
    return [];
  }

  switch (action.type) {
    case 'BOOK_ADD_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVE_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_BOOK_REMOVE_FROM_CART':
      const foundCartItem = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -foundCartItem.count);
    default: 
      return state.cartItems;
  }
}

export default updateShoppingCart;