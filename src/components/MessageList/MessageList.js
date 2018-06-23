/*
** Npm imports
*/
import React from 'react';
import { connect } from 'react-redux';

/*
** Local imports
*/
import { Message } from '../';

import './MessageList.styl';

class MessageList extends React.Component {
  componentDidUpdate() {
    console.log('messageList update', this.messageList);
    this.messageList.scrollTop = this.messageList.scrollHeight;
  }

  render() {
    const { messages } = this.props;

    return (
      <ul ref={ref => (this.messageList = ref)} className="message-list">
        {messages.map(message => <Message key={message.id} {...message} />)}
      </ul>
    );
  }
}

const mapStateToProps = ({ message }) => {
  return { messages: message };
};

export default connect(
  mapStateToProps,
  null
)(MessageList);
