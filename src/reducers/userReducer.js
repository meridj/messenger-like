/**
 * Local imports
 */
import { CHANGE_USERNAME_INPUT_VALUE } from '../actions/types';

/**
 * Reducer
 *
 * @param {string} state
 * @param {action} action
 */
const userReducer = (state = 'anonyme', action) => {
  switch (action.type) {
    case CHANGE_USERNAME_INPUT_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default userReducer;
