
import { RECEIVE_CASH, SPEND_CASH, SPOTTED_BIRD } from '../actions/'
import { BirdRareness } from '../models/'

export const DEFAULT_CASH = 100

let initialState = DEFAULT_CASH

const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPOTTED_BIRD:
      return state + Math.ceil(10/BirdRareness(action.birdType))
    case RECEIVE_CASH:
      return (state + action.amount) 
    case SPEND_CASH:
      return (action.amount < state) ? (state - action.amount) : 0
    default:
      return state
  }
}
 
export default cashReducer