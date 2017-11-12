import React, { Component } from 'react';
import {connect} from 'react-redux';
import { flip } from '../actions';


class FlipButton extends Component {
render(){
  return(
    <button onClick = {this.props.flip}  className = "FlipButton">
      Flip
    </button>
  );
}

}

//
//
const mapActionsToProps = {
//   //type next calling function next
flip: flip
}

export default connect(null, mapActionsToProps) (FlipButton);
