import React from 'react';

import './App.scss';
import Display from '../Display/Display';
import ButtonPanel from '../ButtonPanel/ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
