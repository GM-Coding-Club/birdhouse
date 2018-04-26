
import { combineReducers } from 'redux'
import cash from './cash.js'
import board from './board.js'

const rootReducer = combineReducers({
  cash,
  board
})

export default rootReducer