import React from 'react';
import PropType from 'prop-types';

import './Display.scss';

const Display = ({ result }) => (
  <div className="display">
    <p>{result}</p>
  </div>
);

Display.propTypes = {
  result: PropType.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
