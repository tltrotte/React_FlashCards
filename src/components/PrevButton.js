import React, { Component } from 'react';
import {connect} from 'react-redux';
import { prev } from '../actions';

class PrevButton extends Component {
render(){
  return(
    <button onClick = {this.props.prev} disabled = {this.props.disabled} className = "PrevButton">
      Prev
    </button>
  );
}

}

function mapStateToProps(state){
  return{
  disabled: state.currentCardIndex <= state.cards.length + 1
}
}


const mapActionsToProps = {

prev: prev
}

export default connect(mapStateToProps, mapActionsToProps) (PrevButton);
