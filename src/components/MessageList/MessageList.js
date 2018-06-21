/*
** Npm imports
*/
import React from 'react';

/*
** Local imports
*/
import { Message } from '../';

import './MessageList.styl';

const MessageList = () => {
  return (
    <ul className="message-list">
      <Message />
      <Message />
      <Message />
      <Message />
      {/*<Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />*/}
    </ul>
  );
};

export default MessageList;
