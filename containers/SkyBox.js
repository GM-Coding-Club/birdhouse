
import { connect } from 'react-redux'
import { spawnCloud, moveCloud } from '../actions'
import { SkyBoxComponent } from '../components/'

const mapStateToProps = (state, ownProps) => {
  return {
    clouds: state.clouds
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    spawnCloud: (x, y) => {
      dispatch(spawnCloud(x, y))
    },
    moveCloud: (id, value) => {
      dispatch(moveCloud(id, value))
    }
  }
}

const SkyBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkyBoxComponent)

export default SkyBoxContainer