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
  disabled: state.currentCardIndex <= 0
}
}


const mapActionsToProps = {

prev: prev
}

export default connect(mapStateToProps, mapActionsToProps) (PrevButton);
