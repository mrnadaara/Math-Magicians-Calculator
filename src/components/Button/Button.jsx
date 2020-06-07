import React from 'react';
import PropType from 'prop-types';

import './Button.scss';

const Button = ({ name }) => (
  <div>{name}</div>
);

Button.propTypes = {
  name: PropType.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
