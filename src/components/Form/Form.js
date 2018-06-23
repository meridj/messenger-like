/*
** Npm imports
*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/';

/**
 * Local imports
 */
import { Field } from '../';

import './Form.styl';

/**
 * Class component
 *
 * @param {string} className - className to apply specific style
 * @param {object} fieldConfig - congig object for input form
 * @param {function} changeMessageInputValue - function for add new value to redux state
 * @param {string} formMessageValue - Redux value for input
 */
class Form extends React.Component {
  handleChange = evt => {
    const { value } = evt.target;

    this.props.changeMessageInputValue(value);
  };

  handleSubmit = evt => {
    const currentValue = this.props.formMessageValue;

    evt.preventDefault();
    if (this.props.formMessageValue.trim().length) {
      this.props.changeMessageInputValue('');
      this.props.sendMessage(currentValue);
    }
  };

  render() {
    const { className, fieldConfig, formMessageValue } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={className}>
        <Field
          onChange={this.handleChange}
          value={formMessageValue}
          {...fieldConfig}
        />
      </form>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  fieldConfig: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
  }).isRequired,
  formMessageValue: PropTypes.string.isRequired,
  changeMessageInputValue: PropTypes.func.isRequired
};

const mapStateToProps = ({ formMessageValue }) => {
  return { formMessageValue };
};

export default connect(
  mapStateToProps,
  actions
)(Form);
