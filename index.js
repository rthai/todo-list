// create store
// wrap app in provider
// add dev tools to store
// import reducers

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoReducers from './src/reducers/todoList';
import App from './src/containers/App';

const store = createStore(
  TodoReducers,
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
