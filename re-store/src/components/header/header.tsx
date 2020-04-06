import React from 'react';
import {ICONS} from '../../utils/utils';
import {Link} from 'react-router-dom';

interface HeaderProps {
  countItems: number;
  total: number;
}

export default function Header({countItems, total}: HeaderProps) {
  return (
    <header>
      <Link to="/">
        <div className="logo" >ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="cart">
          <img src={ICONS.cart} alt=""/>
          {countItems} items (${total})
        </div>
      </Link>
    </header>
  )
}
