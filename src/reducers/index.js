/**
 * Npm imports
 */
import { combineReducers } from 'redux';

/**
 * Local imports
 */
import messageReducer from './messageReducer';
import formMessageReducer from './formMessageReducer';

/**
 * Code
 */
export default combineReducers({
  formMessageValue: formMessageReducer,
  message: messageReducer
});
