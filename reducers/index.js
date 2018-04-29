
import { combineReducers } from 'redux'
import cash from './cash.js'
import board from './board.js'
import clouds from './clouds.js'
import birds from './birds.js'
import store from './store.js'

const rootReducer = combineReducers({
  birds,
  board,
  cash,
  clouds,
  store
})

export default rootReducer