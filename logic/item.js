
import { Item, ItemType } from '../models/'
import { 
  draggingItem, 
  droppingItem, 
  setBoardItem, 
  setBoardHover
} from '../actions/'
import { CELL_WIDTH } from '../reducers/board.js'

var coordToCell = (state, x, y) => {
  //let rows = state.board.rows
  //let cols = state.board.cols
  //let width = state.window.width
  //let height = state.window.height
  //let cellSpacing = (width-(cols*CELL_WIDTH))/cols
  let yOffset = y + state.window.scrollOffset
  return {
    row: Math.floor(x/CELL_WIDTH),
    col: Math.floor(yOffset/CELL_WIDTH)
  }
}

export function dropItem(itemType, x, y) {
  return (dispatch, getState) => {
    let cell = coordToCell(getState(), x, y)
    dispatch(droppingItem(itemType, x, y))
    //dispatch(setBoardHover(true, cell.row, cell.col))
    dispatch(setBoardHover(false, 0, 0)) // all false
    dispatch(setBoardItem(itemType, cell.row, cell.col))
    return Promise.resolve()
  }
}

export function dragItem(itemType, x, y) {
  return (dispatch, getState) => {
    dispatch(draggingItem(itemType, x, y))
    return Promise.resolve()
  }
}