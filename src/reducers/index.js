import Beysus from '../images/Beysus.png';
import Kendrick from '../images/Kendrick.png';
import tupac from '../images/tupac.png';
import Outkast from '../images/Outkast.png';
import LittleDragon from '../images/LittleDragon.png';
import FrankOcean from '../images/FrankOcean.png';

const INITIAL_STATE = {
  isFront:true,
  currentCardIndex: 0,
  cards: [
    {
    front:"Best female everything",
    back: Beysus + " Beysus"
  },
  {
    front:"Best Lyricist Alive",
    back: Kendrick + " Kendrick Lamar"
  },
  {
    front:"Best Rapper Ever",
    back: tupac + "Tupac"
  },
  {
  front:"Best Hip Hop Group",
  back: Outkast + "Outkast"
},
{
  front:"Best Alternative Group",
  back: LittleDragon + "Little Dragon"
},
{
  front:"Best Male Everything",
  back: FrankOcean + "Frank Ocean"
}
]
}

// This one function is the reducer. The reducer is the heart of Redux. It tells
// redux what the initial state should be and how it should change the state
// based on any given action.
// We usually specify the initial state as the ES6 default value for the state
// parameter.

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case "NEXT":
    //statecurrentCard++ would mess with immutability can only do below in react
    return Object.assign({}, state,{
      currentCardIndex:state.currentCardIndex + 1
    });
    //selects previous
    case "PREV":
    return Object.assign({}, state,{
      currentCardIndex:state.currentCardIndex  - 1
    });
    case "FLIP":
    if( state.isFront){
      return Object.assign({}, state, {
        isFront: false
      });
    } else {
      return Object.assign({}, state, {
        isFront: true
      });
    }

    default:
    return state;
  }
}
