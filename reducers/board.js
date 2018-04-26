
import { SET_CELL_COLUMNS, ADD_ROWS } from '../actions/'

let initialState = {
  rows: 0,
  cols: 0,
  cells: []
}

var blankCell = () => {
  return {}
}

var insertRow = (cells, cols) => {
  var rowArray = []
  for (var i = 0; i < cols; i++) {
    var cell = blankCell()
    rowArray.push(cell)
  }
  return rowArray.concat(cells) // add to front
}

var insertRows = (cells, rows, cols) => {
  var newArray = []
  newArray.concat(cells)
  for (var i = 0; i < rows; i++) {
    newArray = insertRow(newArray, cols)
  }
  return newArray
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CELL_COLUMNS:
      return Object.assign({}, state, {
        cols: action.number
      })
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