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
      // this is where the "new array will go once shuffled"
      let shuffleCards = [];
      //Original Flashcard Array
       const flashCards = state.cards;
       //new Flashcard Array immutability
       const newFlashArray =  flashCards.map((flashCard) => {
        flashCard
      });

      function shuffle(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
         let index = newFlashArray[Math.floor(Math.random() * newFlashArray.length)];

        if (i !== index) {
            /** swap */
            var temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }

    //   function shuffle(arr) {
    //
    //     while (arr.length) {
    //       //random array of Flashcard
    //    let index = newFlashArray[Math.floor(Math.random() * newFlashArray.length)];
    //
    //     shuffleCards.push(arr[index]);
    //     arr.splice(index, 1);
    // };

return Object.assign({}, state, {
				currentCardIndex:0,
				cards: shuffleCards
			});
};
    default:
    return state;
  }
}
