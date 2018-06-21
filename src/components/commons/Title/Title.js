/*
** Npm imports
*/
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional component
 * Render a title synchronized with the balise prop
 * @param {node} children - content to render as a title
 * @param {string} className - className to apply style on title
 * @param {string} balise - string representation of a html balise
 */
const Title = ({ children, className, balise }) => (
  <React.Fragment>
    {balise === 'h1' && <h1 className={className}>{children}</h1>}
    {balise === 'h2' && <h2 className={className}>{children}</h2>}
    {balise === 'h3' && <h3 className={className}>{children}</h3>}
    {balise === 'h4' && <h4 className={className}>{children}</h4>}
    {balise === 'h5' && <h5 className={className}>{children}</h5>}
    {balise === 'h6' && <h6 className={className}>{children}</h6>}
  </React.Fragment>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  balise: PropTypes.string.isRequired,
  classNames: PropTypes.string
};

export default Title;
