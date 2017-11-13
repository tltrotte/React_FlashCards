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
    back: " Beysus"
  },
  {
    front:"Best Lyricist Alive",
    back: " Kendrick Lamar"
  },
  {
    front:"Best Rapper Ever",
    back: " Tupac"
  },
  {
  front:"Best Hip Hop Group",
  back: " Outkast"
},
{
  front:"Best Alternative Group",
  back: " Little Dragon"
},
{
  front:"Best Male Everything",
  back:" Frank Ocean"
}
]
}
Array.prototype.list_shuffle = function() {
   var i = this.length,
     j, temp;
   while (--i > 0) {
     j = Math.floor(Math.random() * (i + 1));
     temp = this[j];
     this[j] = this[i];
     this[i] = temp;
   }
 }


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
    //Flips current card from Sid A to Side B
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
      case "SHUFFLE":
      const newCards = state.cards.slice(0);
                newCards.list_shuffle();
                return Object.assign({}, state, {
				           currentCardIndex:0,
				             cards: newCards
			});
    default:
    return state;
  }
}
