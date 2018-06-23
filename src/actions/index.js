/**
 * Local imports
 */
import {
  WEBSOCKET_CONNECT,
  RECEIVE_MESSAGE,
  CHANGE_MESSAGE_INPUT_VALUE,
  CHANGE_USERNAME_INPUT_VALUE,
  SEND_MESSAGE
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

export {
  connectToWebsocket,
  receiveMessage,
  changeMessageInputValue,
  changeUsernameInputValue,
  sendMessage
};
