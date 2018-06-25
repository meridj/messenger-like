/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactEmojiMixin from 'react-emoji'; // Projet plus maintenu => trouver une autre solution

/*
** Local imports
*/
import './Message.styl';

/**
 * Functional component
 *
 * @param {string} messageValue
 * @param {string} username
 * @param {string} myUsername
 */
class Message extends React.Component {
  render() {
    const { username, user: myUsername, messageValue } = this.props;
    const isMe = myUsername === username;
    const animationForMessageFromMe =
      'slide-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
    const animationForMessageFromAnother =
      'slide-in-blurred-right 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both';
    const messageStyle = {
      messageWrapper: {
        animation: isMe
          ? animationForMessageFromAnother
          : animationForMessageFromMe,
        alignSelf: isMe ? 'flex-end' : 'flex-start'
      },
      messageText: {
        backgroundColor: isMe ? '#46B1C9' : '#84C0C6'
      }
    };
    const emojifiedMessageValue = ReactEmojiMixin.emojify(messageValue);

    return (
      <li style={messageStyle.messageWrapper} className="message">
        <span className="message-username">{isMe ? 'moi' : username}</span>
        <span style={messageStyle.messageText} className="message-text">
          {emojifiedMessageValue}
        </span>
      </li>
    );
  }
}

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
