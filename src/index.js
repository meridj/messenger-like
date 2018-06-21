/**
 * Npm imports
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Local imports
 */
import { Root } from './containers/';

/**
 * Entry point of the react app
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
