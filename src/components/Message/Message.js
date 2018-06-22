/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
** Local imports
*/
import './Message.styl';

/**
 * Functional component
 *
 * @param {string} messageValue
 */
const Message = ({ messageValue }) => (
  <li className="message">{messageValue}</li>
);

Message.propTypes = {
  messageValue: PropTypes.string.isRequired
};

export default Message;
