/*
** Npm imports
*/
import React from 'react';

/*
** Local imports
*/
import { Form, Title } from '../';

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
      <Form className="form-message" fieldConfig={fields.message} />
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
