
import { RECEIVE_CASH, SPEND_CASH } from '../actions/'

let initialState = 0

const cashReducer = (state = 0, action) => {
  switch (action.type) {
    case RECEIVE_CASH:
      return (state + action.amount) 
    case SPEND_CASH:
      return (action.amount < state) ? (state - action.amount) : 0
    default:
      return state
  }
}
 
export default cashReducer