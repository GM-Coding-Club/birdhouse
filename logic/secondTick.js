
import collectRent from './collectRent.js'

export default function secondTick() {
  return (dispatch, getState) => {
    dispatch(collectRent())
    return Promise.resolve()
  }
}