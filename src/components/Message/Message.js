/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
** Local imports
*/
import './Message.styl';

/**
 * Functional component
 *
 * @param {string} messageValue
 */
const Message = ({ username, user: myUsername, messageValue }) => {
  const isMe = myUsername === username;

  const messageStyle = {
    messageWrapper: {
      alignSelf: isMe ? 'flex-end' : 'flex-start'
    },
    messageText: {
      backgroundColor: isMe ? '#46B1C9' : '#84C0C6'
    }
  };

  return (
    <li style={messageStyle.messageWrapper} className="message">
      <span className="message-username">{isMe ? 'moi' : username}</span>
      <span style={messageStyle.messageText} className="message-text">
        {messageValue}
      </span>
    </li>
  );
};

Message.propTypes = {
  messageValue: PropTypes.string.isRequired
};

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  null
)(Message);
