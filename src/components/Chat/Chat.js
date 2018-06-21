/*
** Npm imports
*/
import React from 'react';

/*
** Local imports
*/
import { Form, Title, MessageList } from '../';

import { fields } from '../../datas/';

import './Chat.styl';

/**
 * Functional component
 * @param - no
 */
const Chat = () => {
  console.log(fields.message);
  return (
    <div className="chat">
      <Title className="chat-title" balise="h1">
        Your Chatroom
      </Title>
      <MessageList />
      <Form className="form-message" fieldConfig={fields.message} />
    </div>
  );
};

export default Chat;
