
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
    col: Math.floor(x/CELL_WIDTH),
    row: Math.floor(yOffset/CELL_WIDTH)
  }
}

var canPlaceSunflower = (cell, row, col, cells) => {
  return cell.item === undefined && row+1 === cells.length
}

var canDropItem = (state, itemType, row, col) => {
  let cells = state.board.cells
  let cell = cells[row][col]
  switch(itemType) {
    case ItemType.POLE:
      return false
    case ItemType.BIRDHOUSE:
      return false
    case ItemType.FEEDER:
      return false
    case ItemType.BIRDBATH:
      return false
    case ItemType.SUNFLOWER:
      return canPlaceSunflower(cell, row, col, cells)
    case ItemType.SEEDS:
      return false
    case ItemType.NUTS:
      return false
    case ItemType.WORMS:
      return false
    case ItemType.FRUIT:
      return false
    default:
      return false
    }
}

export function dropItem(itemType, x, y) {
  return (dispatch, getState) => {
    let cell = coordToCell(getState(), x, y)
    dispatch(droppingItem(itemType, x, y))
    //dispatch(setBoardHover(false, 0, 0)) // all false
    if (canDropItem(getState(), itemType, cell.row, cell.col)) {
      let item = Item(itemType)
      dispatch(spendCash(item.price))
      dispatch(setBoardItem(item, cell.col, cell.row))
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