/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
** Local imports
*/
import { Message } from '../';

import './MessageList.styl';

/**
 * Class component
 *
 * @param {array} messages
 */
class MessageList extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    setTimeout(() => {
      this.messageList.scroll({
        top: this.messageList.scrollHeight,
        behavior: 'smooth'
      });
    }, 200);
  };

  render() {
    const { messages } = this.props;

    return (
      <ul ref={ref => (this.messageList = ref)} className="message-list">
        {messages.map(message => <Message key={message.id} {...message} />)}
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

const mapStateToProps = ({ message }) => {
  return { messages: message };
};

export default connect(
  mapStateToProps,
  null
)(MessageList);
