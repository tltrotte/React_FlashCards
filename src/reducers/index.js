const INITIAL_STATE = {
  isFront:true,
  currentCardIndex: 0,
  cards: [
    {
    front:"A Front",
    back:"A Back"
  },
  {
    front:"B Front",
    back:"B Back"
  },
  {
    front:"C Front",
    back:"C Back"
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
