
import { SET_BOARD_SIZE, SET_SCROLL_OFFSET } from '../actions/'

var setWindowSize = (state, action) => {
  return Object.assign({}, state, {
    width: action.width,
    height: action.height
  })
}

var setScrollOffset = (state, action) => {
  return Object.assign({}, state, {
    scrollOffset: action.offset
  })
}

const initialState = {
  width: 0,
  height: 0,
  scrollOffset: 0
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return setWindowSize(state, action)
    case SET_SCROLL_OFFSET:
      return setScrollOffset(state, action)
    default:
      return state
  }
}
 
export default boardReducer