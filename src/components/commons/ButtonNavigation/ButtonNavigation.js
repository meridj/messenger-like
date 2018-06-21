/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Functional component
 * Create a generic Button to navigate around the app
 * with react-router library
 * @param {string} to - new destination to go
 * @param {node} children - name of the react-router link
 * @param {string} className - className to apply style on link
 */
const ButtonNavigation = ({ to, children, className }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

ButtonNavigation.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ButtonNavigation;
