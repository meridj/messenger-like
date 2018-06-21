/*
** Npm imports
*/
import React from 'react';
import Ionicon from 'react-ionicons';

/**
 * Local imports
 */
import { Chat, ButtonNavigation } from '../../components/';

import './ChatRoom.styl';

/**
 * Class component
 * Entry point of the chat fonctionnalities
 * @param - no
 */
class ChatRoom extends React.Component {
  state = {
    isButtonHovered: false
  };

  handleHoverOnButton = () => {
    this.setState({ isButtonHovered: !this.state.isButtonHovered });
  };

  render() {
    const { isButtonHovered } = this.state;

    return (
      <div className="chat-room">
        <ButtonNavigation
          onButtonHovered={this.handleHoverOnButton}
          to="/"
          className="chat-room-link">
          <Ionicon
            shake={isButtonHovered}
            fontSize="35px"
            icon="md-arrow-back"
          />
        </ButtonNavigation>
        <Chat />
      </div>
    );
  }
}

export default ChatRoom;
