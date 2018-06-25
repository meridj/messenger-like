/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/*
** Local imports
*/
import './UserIsWriting.styl';

/**
 * Functional component
 *
 * @param {string} username
 */
const UserIsWriting = ({ users, myUsername }) => {
  let isWrittingText = '';
  const filteredUsername = users.filter(user => user !== myUsername);
  const usernameToRender = filteredUsername.map((user, key) => (
    <span key={key} className="user-is-writing-username">
      {user},{' '}
    </span>
  ));

  if (filteredUsername.length === 1) {
    isWrittingText = 'is writting ...';
  } else if (filteredUsername.length > 1) {
    isWrittingText = 'are writting ...';
  }
  return (
    <div className="user-is-writing">
      {usernameToRender} {isWrittingText}
    </div>
  );
};

UserIsWriting.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserIsWriting;
