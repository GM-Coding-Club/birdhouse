
import { Bird, BirdType } from '../models/'
import { spawnBird } from '../actions/'

const BIRD_MAX_HORIZONTAL = 2000

export default function spawnBirds() {
  return (dispatch, getState) => {
    let randomTime = Math.floor((Math.random() * 24 * 15) + 1)
    if (randomTime === 1) { // 1 out of 360
      let randomBird = Math.floor((Math.random() * 7))
      let width = getState().window.width
      let x = Math.floor(Math.random() * 2) == 1 ? -100 : width+100
      let y = 100
      dispatch(spawnBird(randomBird, x, y))
    }
    return Promise.resolve()
  }
}