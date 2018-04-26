
import { SPAWN_CLOUD, MOVE_CLOUD } from '../actions/'
import { Cloud, CloudDirection, CloudType } from '../models/'

let initialState = []

var spawnCloud = (state, action) => {
  var cloud = Cloud(action.x, action.y)
  return state.concat(cloud)
}

var moveCloud = (state, action) => {
  return state.map((cloud, index) => {
    if (cloud.id === action.id) {
      return Object.assign({}, cloud, {
        x: (cloud.dir === CloudDirection.LEFT) ? 
          (cloud.x - action.value) : 
          (cloud.x + action.value)
      })
    }
    return cloud
  })
}

const cloudsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPAWN_CLOUD:
      return spawnCloud(state, action)
    case MOVE_CLOUD:
      return moveCloud(state, action)
    default:
      return state
  }
}
 
export default cloudsReducer