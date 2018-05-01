
import { gameTick as staticGameTick } from '../actions/'

// async logic action
// functions in the tree should be promise based
// dispatch and getState are functions
// this is known as a thunk
// thunks dispatch other actions
export function gameTick() {
  return (dispatch, getState) => {
    dispatch(staticGameTick()) // static action
    return Promise.resolve()
  }
}