/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
import { Field } from '../';

import './Form.styl';

/**
 * Functional component
 * @param {string} className - className to apply specific style
 */
const Form = ({ className, fieldConfig }) => {
  return (
    <form className={className}>
      <Field {...fieldConfig} />
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  fieldConfig: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
  }).isRequired
};

export default Form;
