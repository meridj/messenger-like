/**
 * Npm imports
 */
import io from 'socket.io-client';

/**
 * Local imports
 */
import { receiveMessage } from '../actions/';

import { WEBSOCKET_CONNECT, SEND_MESSAGE } from '../actions/types';

/**
 * Middleware
 *
 * @param {object} store - Redux store
 * @param {function} next - Next middleware or reducer
 * @param {object} action - Redux action
 */
const socketMiddleware = store => next => action => {
  let socket;

  switch (action.type) {
    case WEBSOCKET_CONNECT:
      const { dispatch } = store;
      console.log('connect');
      socket = io('http://localhost:3000');
      socket.on('chat message', message => {
        dispatch(receiveMessage(message));
      });
      break;
    case SEND_MESSAGE:
      const message = {
        username: 'Anonyme',
        messageValue: action.messageValue
      };

      console.log(action.type, action.messageValue);
      console.log(socket);
      socket = io('http://localhost:3000');

      socket.emit('chat message', message);
      break;
    default:
      next(action);
  }
};

export default socketMiddleware;
