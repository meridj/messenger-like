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

const MessageList = ({ messages }) => {
  return (
    <ul className="message-list">
      {messages.map(message => <Message key={message.id} {...message} />)}
    </ul>
  );
};

const mapStateToProps = ({ message }) => {
  return { messages: message };
};

export default connect(
  mapStateToProps,
  null
)(MessageList);
