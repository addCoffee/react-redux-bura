import { createStore } from "redux";
import { reducer } from "../reducer";
import { App } from "../components/App.jsx";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
