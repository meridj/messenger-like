/*
** Npm imports
*/
import React from 'react';

/**
 * Local imports
 */
import './ChatRoom.styl';

/**
 * Class component
 * Entry point of the chat fonctionnality*
 * Launch socket.io when is mounting
 * @param - no
 */
class ChatRoom extends React.Component {
  render() {
    return (
      <div className="chat-room">
        <h1>Best ChatRoom ever</h1>
      </div>
    );
  }
}

export default ChatRoom;
