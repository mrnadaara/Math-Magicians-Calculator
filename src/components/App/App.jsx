import React from 'react';

import './App.scss';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';
import Calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    const result = Calculate({ total, next, operation }, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="content">
          <Display result={total} operator={operation} next={next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
