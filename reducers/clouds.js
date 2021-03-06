
import { 
  SPAWN_CLOUD, 
  MOVE_CLOUD, 
  GAME_TICK
} from '../actions/'

import { Cloud, CloudDirection, CloudType } from '../models/'

const CLOUD_MAX_HORZIONTAL = 5000
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

var cloudAssign = (cloud, distance) => {
  // new direction, i.e. x:5000, LEFT to RIGHT
  let leftBarrier = CLOUD_MAX_HORZIONTAL * -1
  let rightBarrier = CLOUD_MAX_HORZIONTAL
  let tooFarLeft = (cloud.x <= leftBarrier)
  let tooFarRight = (cloud.x >= CLOUD_MAX_HORZIONTAL)
  let isTooFar = (tooFarLeft || tooFarRight)
  let isGoingLeft = (cloud.direction === CloudDirection.LEFT)
  let oppositeDirection = isGoingLeft ? CloudDirection.RIGHT : CloudDirection.LEFT // YES : NO
  let newDirection = isTooFar ? oppositeDirection : cloud.direction // YES : NO
  // new x coordinate, i.e. 5000 to 5001
  let newLeft = (cloud.x - distance)
  let newRight = (cloud.x + distance)
  let isNowGoingLeft = (newDirection === CloudDirection.LEFT)
  let newX = isNowGoingLeft ? newLeft : newRight // YES : NO
  // updating the cloud
  return Object.assign({}, cloud, {
    direction: newDirection,
    x: newX,
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
    return cloudAssign(cloud, 1)
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
