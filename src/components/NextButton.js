import React, { Component } from 'react';
import {connect} from 'react-redux';
import { next } from '../actions';

class NextButton extends Component {
render(){
  return(
    <button onClick = {this.props.next} disabled = {this.props.disabled} className = "NextButton">
      Next
    </button>
  );
}

}

function mapStateToProps(state){
  return{
  disabled: state.currentCardIndex >= state.cards.length - 1
}
}


const mapActionsToProps = {
  //type next calling function next
next: next
}

export default connect(mapStateToProps, mapActionsToProps) (NextButton);
