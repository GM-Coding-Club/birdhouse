
import { SET_BOARD_SIZE } from '../actions/'

var setWindowSize = (state, action) => {
  return Object.assign({}, state, {
    width: action.width,
    height: action.height
  })
}

const initialState = {
  width: 0,
  height: 0
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return setWindowSize(state, action)
    default:
      return state
  }
}
 
export default boardReducer