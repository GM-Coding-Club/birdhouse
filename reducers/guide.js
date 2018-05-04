
import { SHOW_GUIDE, HIDE_GUIDE, SPOTTED_BIRD } from '../actions/'

let initialState = {
  visible: false,
  spottings: []
}

var showGuide = (state, action) => {
  return Object.assign({}, state, {
    visible: true
  })
}

var hideGuide = (state, action) => {
  return Object.assign({}, state, {
    visible: false
  })
}

var spottedBird = (state, action) => {
  return Object.assign({}, state, {
    spottings: (state.spottings.includes(action.birdType) ?
      state.spottings : state.spottings.concat(action.birdType))
  })
}

const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GUIDE:
      return showGuide(state, action)
    case HIDE_GUIDE:
      return hideGuide(state, action)
    case SPOTTED_BIRD:
      return spottedBird(state, action)
    default:
      return state
  }
}
 
export default guideReducer