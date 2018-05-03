
import { ITEM_DRAGGING, ITEM_DROP } from '../actions/'

let initialState = {
  itemType: undefined,
  validPlacement: true,
  x: 0,
  y: 0
}

var draggingItem = (state, action) => {
  if (state.itemType) {
    return Object.assign({}, state, {
      x: action.x,
      y: action.y
    })
  } else {
    return Object.assign({}, state, {
      itemType: action.itemType,
      x: action.x,
      y: action.y
    })
  }
}

var droppingItem = (state, action) => {
  return Object.assign({}, state, {
    itemType: undefined,
    x: 0,
    y: 0
  })
}

const hoveringReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_DRAGGING:
      return draggingItem(state, action)
    case ITEM_DROP:
      return droppingItem(state, action)
    default:
      return state
  }
}
 
export default hoveringReducer