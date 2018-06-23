/**
 * Local imports
 */
import { WEBSOCKET_CONNECT } from '../actions/types';

/**
 * Reducer
 *
 * @param {array} state
 * @param {action} action
 */
const websocketReducer = (state = null, action) => {
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      return action.socket;
    default:
      return state;
  }
};

export default websocketReducer;
