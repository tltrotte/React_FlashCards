import React, { Component } from 'react';
import Card from './Card';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Card />
      <NextButton />
      <PrevButton/ >
      </div>
    );
  }
}

export default App;
