import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
