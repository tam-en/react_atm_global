import React, { Component } from 'react';
import logo from './general-assembly-vector-logo.svg';

import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name="Checking" />
        <Account name="Savings" />
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
