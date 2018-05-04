
import { 
  GAME_TICK, 
  SPAWN_BIRD,
  STOP_BIRD,
  START_BIRD,
  HIDE_BIRD,
  SHOW_BIRD
} from '../actions/'

import { Bird, BirdPosition, BirdDirection } from '../models/'

const BIRD_MAX_HORIZONTAL = 2000

let initialState = []

const MOVE_SPEED = 3

var moveBirds = (state) => {
  return state.map((bird, index) => {
    return Object.assign({}, bird, {
      x: (bird.direction === BirdDirection.LEFT) ?
        bird.x - MOVE_SPEED : bird.x + MOVE_SPEED
    })
  })
}

var destroyLostBirds = (state) => {
  var newState = []
  for (bird of state) {
    if (bird.x > BIRD_MAX_HORIZONTAL*-1 && bird.x < BIRD_MAX_HORIZONTAL) {
      newState.push(bird)
    }
  }
  return newState
}

var gameTick = (state) => {
  var movedBirds = moveBirds(state)
  return destroyLostBirds(movedBirds)
}

var spawnBird = (state, action) => {
  let bird = Bird(action.x, action.y, action.birdType)
  return state.concat(bird)
}

var stopBird = (state, action) => {
  return state.map((bird, index) => {
    if (bird.id === action.id) {
      return Object.assign({}, bird, {
        position: BirdPosition.STATIONARY
      })
    }
  })
}

var startBird = (state, action) => {
  return state.map((bird, index) => {
    if (bird.id === action.id) {
      return Object.assign({}, bird, {
        position: BirdPosition.FLYING
      })
    }
  })
}

var hideBird = (state, action) => {
  return state.map((bird, index) => {
    if (bird.id === action.id) {
      return Object.assign({}, bird, {
        visible: false
      })
    }
  })
}

var showBird = (state, action) => {
  return state.map((bird, index) => {
    if (bird.id === action.id) {
      return Object.assign({}, bird, {
        visible: true
      })
    }
  })
}

const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_TICK: 
      return gameTick(state)
    case SPAWN_BIRD:
      return spawnBird(state, action)
    case STOP_BIRD:
      return stopBird(state, action)
    case START_BIRD:
      return startBird(state, action)
    case HIDE_BIRD:
      return hideBird(state, action)
    case SHOW_BIRD:
      return showBird(state, action)
    default:
      return state
  }
}
 
export default birdsReducer