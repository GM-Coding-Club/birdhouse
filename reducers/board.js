
import { 
  SET_BOARD_SIZE, 
  ADD_ROWS, 
  ITEM_DROP, 
  SET_BOARD_ITEM, 
  SET_BOARD_HOVER
} from '../actions/'
import { Cell } from '../models'

let initialState = {
  rows: 0,
  cols: 0,
  cells: []
}

var newRow = (cols) => {
  var rowArray = []
  for (var i = 0; i < cols; i++) {
    var cell = Cell()
    rowArray.push(cell)
  }
  return rowArray
}

var insertRows = (cells, rows, cols) => {
  var newRowArray = []
  newRowArray.concat(cells)
  for (var i = 0; i < rows; i++) {
    var row = newRow(cols)
    newRowArray.unshift(row)
  }
  return newRowArray
}

export const CELL_WIDTH = 50

var setBoardSize = (state, action) => {
  if (state.cols !== 0) {
    return state // can't set board size more than once
  } else { 
    //1024x768
    let numberOfCols = Math.floor(action.width / CELL_WIDTH) // 20
    let numberOfRows = numberOfCols // 20
    return Object.assign({}, state, {
      rows: numberOfRows,
      cols: numberOfCols,
      cells: insertRows(state.cells, numberOfRows, numberOfCols)
    })
  }
}

var addRows = (state, action) => {
  return Object.assign({}, state, {
    rows: state.rows + action.rows,
    cells: insertRows(state.cells, action.rows, state.cols)
  })
}

var setBoardItem = (state, action) => {
  return Object.assign({}, state, {
    cells: state.cells.map((rowObj, row) => {
      return rowObj.map((obj, col) => {
        return Object.assign({}, obj, {
          item: (row === action.x && col === action.y) ? action.item : obj.item
        })
      })
    })
  })
}

var setBoardHover = (state, action) => {
  return Object.assign({}, state, {
    cells: state.cells.map((rowObj, row) => {
      return rowObj.map((obj, col) => {
        return Object.assign({}, obj, {
          hovered: (row === action.x && col === action.y) ? action.hovered : false
        })
      })
    })
  })
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return setBoardSize(state, action)
    case ADD_ROWS:
      return addRows(state, action)
    case SET_BOARD_ITEM:
      return setBoardItem(state, action)
    case SET_BOARD_HOVER:
      return setBoardHover(state, action)
    default:
      return state
  }
}
 
export default boardReducer