
import { Item, ItemType, ItemPrice } from '../models/'
import { 
  draggingItem, 
  droppingItem, 
  setBoardItem, 
  setBoardHover,
  spendCash
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

var canDropItem = (state, itemType, row, col) => {
  for (let row of state.board.cells) {
    for (let cell of row) {
      if (cell.item !== undefined) {
        console.log("full")
        return false
      } else {
        console.log("set item")
        return true
      }
    }
  }
  return true
}

export function dropItem(itemType, x, y) {
  return (dispatch, getState) => {
    let cell = coordToCell(getState(), x, y)
    dispatch(droppingItem(itemType, x, y))
    //dispatch(setBoardHover(false, 0, 0)) // all false
    if (canDropItem(getState(), itemType, cell.row, cell.col)) {
      let item = Item(itemType)
      dispatch(spendCash(item.price))
      dispatch(setBoardItem(item, cell.row, cell.col))
    }
    return Promise.resolve()
  }
}

export function dragItem(itemType, x, y) {
  return (dispatch, getState) => {
    dispatch(draggingItem(itemType, x, y))
    return Promise.resolve()
  }
}