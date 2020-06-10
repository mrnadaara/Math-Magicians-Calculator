import React from 'react';
import PropType from 'prop-types';

import Button from '../Button/Button';
import './ButtonPanel.scss';

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        <div className="group">
          <Button clickHandler={this.handleClick} name="AC" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="+/-" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="%" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="÷" />
        </div>
        <div className="group">
          <Button clickHandler={this.handleClick} name="7" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="8" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="9" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="x" />
        </div>
        <div className="group">
          <Button clickHandler={this.handleClick} name="4" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="5" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="6" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="-" />
        </div>
        <div className="group">
          <Button clickHandler={this.handleClick} name="1" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="2" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="3" color="lightgrey" />
          <Button clickHandler={this.handleClick} name="+" />
        </div>
        <div className="group">
          <Button clickHandler={this.handleClick} name="0" wide color="lightgrey" />
          <Button clickHandler={this.handleClick} name="." color="lightgrey" />
          <Button clickHandler={this.handleClick} name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropType.func,
};

ButtonPanel.defaultProps = {
  clickHandler: () => {},
};

export default ButtonPanel;
