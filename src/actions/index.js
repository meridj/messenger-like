/**
 * Local imports
 */
import {
  WEBSOCKET_CONNECT,
  RECEIVE_MESSAGE,
  CHANGE_MESSAGE_INPUT_VALUE,
  CHANGE_USERNAME_INPUT_VALUE,
  SET_USERNAME_TO_INITIALSTATE,
  SEND_MESSAGE,
  USER_IS_WRITTING,
  HAS_FINISHED_WRITTING
} from './types';

/**
 * Websocket actions
 */
const connectToWebsocket = () => {
  return {
    type: WEBSOCKET_CONNECT
  };
};

/**
 * Message actions
 */
const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message: message
  };
};

/**
 * FormMessage actions
 */
const changeMessageInputValue = newValue => {
  return {
    type: CHANGE_MESSAGE_INPUT_VALUE,
    value: newValue
  };
};

const sendMessage = value => {
  return {
    type: SEND_MESSAGE,
    messageValue: value
  };
};

/**
 * User actions
 */
const changeUsernameInputValue = newValue => {
  return {
    type: CHANGE_USERNAME_INPUT_VALUE,
    value: newValue
  };
};

const setUsernameToInitialState = () => {
  return {
    type: SET_USERNAME_TO_INITIALSTATE
  };
};

const userIsWritting = username => {
  return {
    type: USER_IS_WRITTING,
    username
  };
};

const hasFinishedWritting = users => {
  return {
    type: HAS_FINISHED_WRITTING,
    users
  };
};

export {
  connectToWebsocket,
  receiveMessage,
  changeMessageInputValue,
  changeUsernameInputValue,
  setUsernameToInitialState,
  sendMessage,
  userIsWritting,
  hasFinishedWritting
};
