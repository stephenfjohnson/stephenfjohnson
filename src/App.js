import React, { Component, Fragment } from 'react';
import Background from './background';
import Name from './name';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Name />
        <Background />
      </Fragment>
    );
  }
}

export default App;
