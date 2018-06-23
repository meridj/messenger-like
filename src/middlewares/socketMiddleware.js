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
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      const newSocket = io('http://localhost:3000');
      const { dispatch } = store;

      newSocket.on('chat message', message => {
        dispatch(receiveMessage(message));
      });
      action.socket = newSocket;
      break;
    case SEND_MESSAGE:
      const { socket, user } = store.getState();
      const message = {
        username: user,
        messageValue: action.messageValue
      };

      socket.emit('chat message', message);
      break;
  }
  next(action);
};

export default socketMiddleware;
