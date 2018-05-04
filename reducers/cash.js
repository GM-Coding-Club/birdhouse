
import { RECEIVE_CASH, SPEND_CASH } from '../actions/'

export const DEFAULT_CASH = 1000

let initialState = DEFAULT_CASH

const cashReducer = (state = initialState, action) => {
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