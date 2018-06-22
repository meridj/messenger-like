/**
 * Npm imports
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { socketMiddleware } from '../middlewares/';

/**
 * Local imports
 */
import reducers from '../reducers/';

/**
 * Extension redux dev tools
 */
let devTools = [];

if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

/**
 * Middlewares custom
 */
const appliedSocketMiddleware = applyMiddleware(socketMiddleware);

/**
 * Enhancers : les extensions/outils + les middlewares custom
 */
const enhancers = compose(
  appliedSocketMiddleware,
  ...devTools
);

/**
 * Store, configuré avec le reducer et les "enhancers"
 */
const store = createStore(reducers, enhancers);

export default store;
