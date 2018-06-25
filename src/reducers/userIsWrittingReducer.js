/**
 * Local imports
 */
import { USER_IS_WRITTING, HAS_FINISHED_WRITTING } from '../actions/types';

/**
 * Reducer
 *
 * @param {string} state
 * @param {action} action
 */
const userIsWrittingReducer = (state = [], action) => {
  switch (action.type) {
    case USER_IS_WRITTING:
      return [...state, action.username];
    case HAS_FINISHED_WRITTING:
      console.log(action.users);
      return [...action.users];
    default:
      return state;
  }
};

export default userIsWrittingReducer;
