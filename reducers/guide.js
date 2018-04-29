
import { SHOW_GUIDE, HIDE_GUIDE } from '../actions/'

let initialState = {
  visible: true,
  spottings: []
}

const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GUIDE:
      return  Object.assign({}, state, {
        visible: true
      })
    case HIDE_GUIDE:
      return  Object.assign({}, state, {
        visible: false
      })
    default:
      return state
  }
}
 
export default guideReducer