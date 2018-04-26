
import { 
  SPAWN_CLOUD, 
  MOVE_CLOUD, 
  GAME_TICK
} from '../actions/'

import { Cloud, CloudDirection, CloudType } from '../models/'

const CLOUD_MAX_HORZIONTAL = 3000
const CLOUD_MAX_VERTICAL = 6000
const SPAWN_NUMBER = 200

var randomCloud = () => {
  var x = (Math.random() * CLOUD_MAX_HORZIONTAL)
  x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1 // make negative
  let y = (Math.random() * CLOUD_MAX_VERTICAL) + 100
  let dir = Math.round(Math.random())
  var cloud = Cloud(x, y, dir)
  return cloud
}

var randomClouds = () => {
  var array = []
  for (var i = 0; i < SPAWN_NUMBER; i++) {
    var cloud = randomCloud()
    array.push(cloud)
  }
  return array
}

let initialState = randomClouds()

var spawnCloud = (state, action) => {
  var cloud = Cloud(action.x, action.y)
  return state.concat(cloud)
}

var cloudAssign = (cloud, value) => {
  return Object.assign({}, cloud, {
    x: (cloud.direction === CloudDirection.LEFT) ? 
       (cloud.x - value) : 
       (cloud.x + value),
    direction: (CLOUD_MAX_HORZIONTAL*-1 < cloud.x < CLOUD_MAX_HORZIONTAL) ?
      cloud.direction : ( cloud.direction === CloudDirection.LEFT ?
        CloudDirection.RIGHT : CloudDirection.LEFT
      )
  })
}

var moveCloud = (state, action) => {
  return state.map((cloud, index) => {
    if (cloud.id === action.id) {
      return cloudAssign(cloud, action.value)
    }
    return cloud
  })
}

var moveClouds = (state) => {
  return state.map((cloud, index) => {
    return cloudAssign(cloud, 3)
  })
}

var gameTick = (state) => {
  return moveClouds(state)
}

const cloudsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_TICK: 
      return gameTick(state)
    case SPAWN_CLOUD:
      return spawnCloud(state, action)
    case MOVE_CLOUD:
      return moveCloud(state, action)
    default:
      return state
  }
}
 
export default cloudsReducer