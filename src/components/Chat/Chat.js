/*
** Npm imports
*/
import React from 'react';
import { connect } from 'react-redux';
/*
** Local imports
*/
import { Form, Title, MessageList, Field } from '../';

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

  render() {
    const { user } = this.props;

    return (
      <div className="chat">
        <Title className="chat-title" balise="h1">
          Welcome in your Chatroom :{' '}
          <Field
            value={user}
            onChange={this.handleChangeUsernameInputValue}
            {...fields.username}
          />
        </Title>
        <MessageList />
        <Form className="form-message" fieldConfig={fields.message} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  actions
)(Chat);
