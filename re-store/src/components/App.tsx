import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';

export const App = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        path="/cart"
        component={CartPage}
      />
    </Switch>
  );
}