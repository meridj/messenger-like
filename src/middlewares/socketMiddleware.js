/**
 * Npm imports
 */
import io from 'socket.io-client';

/**
 * Local imports
 */
import {
  receiveMessage,
  userIsWritting,
  hasFinishedWritting
} from '../actions/';

import {
  WEBSOCKET_CONNECT,
  SEND_MESSAGE,
  CHANGE_MESSAGE_INPUT_VALUE
} from '../actions/types';

/**
 * Middleware
 *
 * @param {object} store - Redux store
 * @param {function} next - Next middleware or reducer
 * @param {object} action - Redux action
 */
const socketMiddleware = store => next => action => {
  let { socket, user, usersIsWritting } = store.getState();

  switch (action.type) {
    case WEBSOCKET_CONNECT:
      const { dispatch } = store;

      socket = io('http://localhost:3000');
      socket.on('chat message', message => {
        console.log(message.username);
        console.log('newUsersIsWritting : ', usersIsWritting);
        const newUsersIsWritting = usersIsWritting.filter(
          username => username === message.username
        );

        dispatch(receiveMessage(message));
        dispatch(hasFinishedWritting(newUsersIsWritting));
      });
      socket.on('user is writting', user => {
        dispatch(userIsWritting(user));
      });
      action.socket = socket;
      break;
    case CHANGE_MESSAGE_INPUT_VALUE:
      const isUserWritting = usersIsWritting.find(
        currentUser => currentUser === user
      );

      if (!isUserWritting) {
        socket.emit('user is writting', user);
      }
      break;
    case SEND_MESSAGE:
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
