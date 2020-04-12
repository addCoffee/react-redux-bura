import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {ICONS} from '../../utils/utils';
import {CartItem} from '../../models/Books.model';


function Header({cartItems}: {cartItems: CartItem[]}) {
  const totalPrice = cartItems.reduce((accum: number, currentPosition: CartItem) => accum + currentPosition.total, 0);
  const totalQuantity = cartItems.reduce((accum: number, currentPosition: CartItem) => accum + currentPosition.count, 0);

  return (
    <header>
      <Link to="/">
        <div className="logo">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="cart">
          <img src={ICONS.cart} alt=""/>
          {totalQuantity} items (${totalPrice})
        </div>
      </Link>
    </header>
  )
}

const mapStateToProps = ({cartItems}) => ({cartItems});

export default connect(mapStateToProps)(Header);
