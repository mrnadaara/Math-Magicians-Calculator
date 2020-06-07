import React from 'react';
import PropType from 'prop-types';

import './Display.scss';

const Display = ({ result }) => (
  <div>{result}</div>
);

Display.propTypes = {
  result: PropType.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
