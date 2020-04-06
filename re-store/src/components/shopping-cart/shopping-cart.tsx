import React from 'react';
import {ICONS} from '../../utils/utils';

export default function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <p className="title-table">Your Order</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>You Don't Know JS: ES6 & Beyond</td>
            <td>2</td>
            <td>$32</td>
            <td>
              <div>
                <button className="blue" type="button">
                  <img src={ICONS.plus} alt="plus" />
                </button>
                <button type="button">
                  <img src={ICONS.minus} alt="minus" />
                </button>
                <button type="button">
                  <img src={ICONS.trash} alt="trash" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        Total: $32
      </div>
    </div>
  )
}
