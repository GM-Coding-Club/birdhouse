
import { SHOW_BIRDHOUSE, HIDE_BIRDHOUSE } from '../actions/'

let initialState = {
  visible: false,
  location: undefined
}

const birdhouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_BIRDHOUSE:
      return  Object.assign({}, state, {
        visible: true,
        location: action.location
      })
    case HIDE_BIRDHOUSE:
      return  Object.assign({}, state, {
        visible: false,
        location: undefined
      })
    default:
      return state
  }
}
 
export default birdhouseReducer