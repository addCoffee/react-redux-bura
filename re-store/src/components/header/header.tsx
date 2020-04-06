import React from 'react';
import {ICONS} from '../../utils/utils';

interface HeaderProps {
  countItems: number;
  total: number;
}

export default function Header({countItems, total}: HeaderProps) {
  return (
    <header>
      <a className="logo" href="">ReStore</a>
      <a className="cart"href="">
        <img src={ICONS.cart} alt=""/>
        {countItems} items (${total})
        </a>
    </header>
  )
}
