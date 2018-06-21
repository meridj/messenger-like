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
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
