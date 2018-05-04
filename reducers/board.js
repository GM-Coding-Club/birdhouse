
import { SET_BOARD_SIZE, ADD_ROWS } from '../actions/'
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

const CELL_WIDTH = 50

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

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD_SIZE:
      return setBoardSize(state, action)
    case ADD_ROWS:
      return Object.assign({}, state, {
        rows: state.rows + action.rows,
        cells: insertRows(state.cells, action.rows, state.cols)
      })
    default:
      return state
  }
}
 
export default boardReducer