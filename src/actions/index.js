/**
 * Local imports
 */
import {
  WEBSOCKET_CONNECT,
  RECEIVE_MESSAGE,
  CHANGE_MESSAGE_INPUT_VALUE,
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

export {
  connectToWebsocket,
  receiveMessage,
  changeMessageInputValue,
  sendMessage
};
