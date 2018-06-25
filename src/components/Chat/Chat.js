/*
** Npm imports
*/
import React from 'react';
import { connect } from 'react-redux';
/*
** Local imports
*/
import { Form, Title, MessageList, Field, UserIsWriting } from '../';

import { fields } from '../../datas/';

import * as actions from '../../actions/';

import './Chat.styl';

/**
 * Functional component
 * @param - no
 */
class Chat extends React.Component {
  handleChangeUsernameInputValue = evt => {
    const { value } = evt.target;

    this.props.changeUsernameInputValue(value);
  };

  handleBlurInput = () => {
    if (!this.props.user.length) this.props.setUsernameToInitialState();
  };

  render() {
    const { user, usersIsWritting } = this.props;

    return (
      <div className="chat">
        <Title className="chat-title" balise="h1">
          Welcome in your Chatroom :{' '}
          <Field
            value={user}
            onBlur={this.handleBlurInput}
            onChange={this.handleChangeUsernameInputValue}
            {...fields.username}
          />
        </Title>
        <MessageList />
        {usersIsWritting.length > 0 && (
          <UserIsWriting myUsername={user} users={usersIsWritting} />
        )}
        <Form className="form-message" fieldConfig={fields.message} />
      </div>
    );
  }
}

const mapStateToProps = ({ user, usersIsWritting }) => {
  return { user, usersIsWritting };
};

export default connect(
  mapStateToProps,
  actions
)(Chat);
