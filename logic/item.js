
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
  return cell && cell.item === undefined && row+1 === cells.length
}

var itemBelowIs = (row, col, cells, itemType) => {
  return (row+1 === cells.length || 
    (cells.length >= row+1 && 
      cells[col][row+1] && 
      cells[col][row+1].item && 
      cells[col][row+1].item.type === itemType
    )
  )
}

var canPlacePole = (cell, row, col, cells) => {
  return cell && cell.item === undefined && 
    (row+1 === cells.length || itemBelowIs(row, col, cells, ItemType.POLE))
}

var canPlaceBirdhouse = (cell, row, col, cells) => {
  return cell && cell.item === undefined && itemBelowIs(row, col, cells, ItemType.POLE)
}

var canDropItem = (state, itemType, row, col) => {
  let cells = state.board.cells
  let cell = cells[col][row]
  switch(itemType) {
    case ItemType.POLE:
      return canPlacePole(cell, row, col, cells)
    case ItemType.BIRDHOUSE:
      return canPlaceBirdhouse(cell, row, col, cells)
    case ItemType.BIRDHOUSEBIG:
      return canPlaceBirdhouse(cell, row, col, cells)
    case ItemType.SUNFLOWER:
      return canPlaceSunflower(cell, row, col, cells)
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