
import { 
  gameTick as staticGameTick
} from '../actions/'

import spawnBirds from './spawnBirds.js'

// async logic action
// functions in the tree should be promise based
// dispatch and getState are functions
// this is known as a thunk
// thunks dispatch other actions
export default function gameTick() {
  return (dispatch, getState) => {
    dispatch(staticGameTick()) // static action
    dispatch(spawnBirds())
    return Promise.resolve()
  }
}