/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
import './Field.styl';

/**
 * Functional component
 * @param {string} placeholder - specific placeholder for input*
 * @param {string} type - specific type for input
 * @param {string} className - specific className to apply style
 */
const Field = ({ placeholder, type, className, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className={className}
      placeholder={placeholder}
      type={type}
    />
  );
};

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Field;
