import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';
import Header from './header/header';

export const App = () => {
  return (
    <main id="main">
      <Header countItems={5} total={75} />
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
    </main>
  );
}