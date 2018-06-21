/**
 * Npm imports
 */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Code
 */
const store = createStore(() => {}, composeWithDevTools());

export default store;
