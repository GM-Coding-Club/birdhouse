
import { Bird, BirdType, BirdSize, BirdPosition } from '../models/'
import { spawnBird, spottedBird } from '../actions/'

const BIRD_MAX_HORIZONTAL = 2000

export default function spawnBirds() {
  return (dispatch, getState) => {
    let randomTime = Math.floor((Math.random() * 24 * 15) + 1)
    if (randomTime === 1) { // 1 out of 360
      let randomBird = Math.floor((Math.random() * 7))
      let birdSize = BirdSize(randomBird, BirdPosition.FLYING)
      let state = getState()
      let width = state.window.width
      let rows = state.board.rows
      let x = Math.floor(Math.random() * 2) == 1 ? -birdSize.x : width+birdSize.x
      let y = Math.floor((Math.random() * rows)) * 50 + 100
      dispatch(spawnBird(randomBird, x, y))
      dispatch(spottedBird(randomBird))
    }
    return Promise.resolve()
  }
}