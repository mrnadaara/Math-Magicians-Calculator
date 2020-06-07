import React from 'react';
import PropType from 'prop-types';

import './Button.scss';

const Button = ({ name, color, wide }) => (
  <button
    type="button"
    className="button"
    style={{
      backgroundColor: color,
      width: wide ? '50%' : '25%',
    }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropType.string,
  color: PropType.string,
  wide: PropType.bool,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: false,
};

export default Button;
