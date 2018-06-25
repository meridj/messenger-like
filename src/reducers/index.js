/**
 * Npm imports
 */
import { combineReducers } from 'redux';

/**
 * Local imports
 */
import messageReducer from './messageReducer';
import formMessageReducer from './formMessageReducer';
import websocketReducer from './websocketReducer';
import userReducer from './userReducer';
import userIsWrittingReducer from './userIsWrittingReducer';

/**
 * Code
 */
export default combineReducers({
  formMessageValue: formMessageReducer,
  socket: websocketReducer,
  message: messageReducer,
  user: userReducer,
  usersIsWritting: userIsWrittingReducer
});
