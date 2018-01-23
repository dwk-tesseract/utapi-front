import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import AppRouter from './routes';

import 'normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

const history = createHistory();

const store = createStore(
  routerReducer,
  applyMiddleware(routerMiddleware(history)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouter />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
