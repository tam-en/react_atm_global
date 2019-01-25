import React, { Component } from 'react';
import logo from './general-assembly-vector-logo.svg';

import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="title">BANK OF</div>
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
        </div>
        <div className="boxy">
          <Account name="Checking" />
          <Account name="Savings" />
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
