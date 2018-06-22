/**
 * Local imports
 */
import { CHANGE_MESSAGE_INPUT_VALUE } from '../actions/types';

/**
 * Reducer
 *
 * @param {array} state
 * @param {action} action
 */
const formMessageReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT_VALUE:
      return action.value;
    default:
      return state;
  }
};

export default formMessageReducer;
