import React from 'react';

import Button from '../Button/Button';

import './ButtonPanel.scss';

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="group">
      <Button name="AC" color="lightgrey" />
      <Button name="+/-" color="lightgrey" />
      <Button name="%" color="lightgrey" />
      <Button name="/" />
    </div>
    <div className="group">
      <Button name="7" color="lightgrey" />
      <Button name="8" color="lightgrey" />
      <Button name="9" color="lightgrey" />
      <Button name="X" />
    </div>
    <div className="group">
      <Button name="4" color="lightgrey" />
      <Button name="5" color="lightgrey" />
      <Button name="6" color="lightgrey" />
      <Button name="-" />
    </div>
    <div className="group">
      <Button name="1" color="lightgrey" />
      <Button name="2" color="lightgrey" />
      <Button name="3" color="lightgrey" />
      <Button name="+" />
    </div>
    <div className="group">
      <Button name="0" wide color="lightgrey" />
      <Button name="." color="lightgrey" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
