import React from 'react';
import {connect} from 'react-redux';
import {ICONS} from '../../utils/utils';
import {CartItem} from '../../models/Books.model';
import {bookAddedToCart, bookRemovedToCart, allBookRemovedToCart} from '../../actions/actions';

interface ShoppingCartProps {
  items: CartItem[];
  onDecrease: (bookId: number) => void;
  onIncrease: (bookId: number) => void;
  onDelete: (bookId: number) => void;
}

function ShoppingCart({items, onDecrease, onDelete, onIncrease}: ShoppingCartProps) {
  const totalPrice = items.reduce((accum: number, currentPosition: CartItem) => accum + currentPosition.total, 0);

  return (
    <div className="shopping-cart">
      <p className="title-table">Your Order</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((book, idx) => (
              <tr key={book.id}>
                <td>{idx + 1}</td>
                <td>{book.title}</td>
                <td>{book.count}</td>
                <td>${book.total}</td>
                <td>
                  <div>
                    <button
                      className="blue" type="button"
                      onClick={() => onIncrease(book.id)}
                    >
                      <img src={ICONS.plus} alt="plus" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDecrease(book.id)}
                    >
                      <img src={ICONS.minus} alt="minus" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(book.id)}
                    >
                      <img src={ICONS.trash} alt="trash" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="total">
        Total: ${totalPrice}
      </div>
    </div>
  )
}

const mapStateToProps = ({cartItems}) => ({items: cartItems});
const mapDispatchToProps = {
  onDecrease: bookRemovedToCart,
  onIncrease: bookAddedToCart,
  onDelete: allBookRemovedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
