
import { GAME_TICK } from '../actions/'

let initialState = []

var moveBirds = (state) => {
  // move birds
  // destroy lost birds
  return state
}

var gameTick = (state) => {
  return moveBirds(state)
}

const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_TICK: 
      return gameTick(state)
    default:
      return state
  }
}
 
export default birdsReducer