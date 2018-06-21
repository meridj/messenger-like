/**
 * Npm imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Local imports
 */
import { App } from './containers/';

import './styles/reset.css';
import './styles/index.styl';

/**
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(() => {}, composeWithDevTools());

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
