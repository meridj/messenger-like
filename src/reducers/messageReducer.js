/**
 * Local imports
 */
import { RECEIVE_MESSAGE } from '../actions/types';

/**
 * Reducer
 *
 * @param {array} state
 * @param {action} action
 */
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default messageReducer;
