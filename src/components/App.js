import React, { Component } from 'react';
import Card from './Card';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import FlipButton from './FlipButton';

class App extends Component {
  render() {
    return (
      <div className="App">


      <Card />
      <NextButton />
      <PrevButton/ >
      {/* <ShuffleButton/ > */}
      <FlipButton/ >

      </div>
    );
  }
}

export default App;
