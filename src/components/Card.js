import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component{

  render(){
     return (
       <div className = "Card">
         {this.props.text}
       </div>
     );
  }

}

function mapStateToProps(state){

  const card = state.cards[state.currentCardIndex];
  let cardText;
  if(state.isFront) {
    cardText = card.front;
  } else{
    cardText = card.back;
  }
  return{
  text:cardText
};

}
export default connect(mapStateToProps)(Card);
