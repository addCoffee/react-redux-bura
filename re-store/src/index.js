import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import BookstoreService from "./services/bookstore.service";
import store from "./store";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import { BookstoreServiceProvider } from './components/bookstore-service-context/bookstore-service-context';
import { App } from './components/App';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
            <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
