/**
 * Local imports
 */
import {
  CHANGE_USERNAME_INPUT_VALUE,
  SET_USERNAME_TO_INITIALSTATE
} from '../actions/types';

import { pseudos } from '../datas/';

const generateRandomUsername = () => {
  return pseudos[Math.floor(Math.random() * pseudos.length)];
};

const initialState = generateRandomUsername();

/**
 * Reducer
 *
 * @param {string} state
 * @param {action} action
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME_INPUT_VALUE:
      return action.value;
    case SET_USERNAME_TO_INITIALSTATE:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
