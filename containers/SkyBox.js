
import { connect } from 'react-redux'
import { SkyBoxComponent } from '../components/'
import { setScrollOffset } from '../actions/'

const mapStateToProps = (state, ownProps) => {
  return {
    clouds: state.clouds,
    birds: state.birds
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setScrollOffset: (offset) => {
      dispatch(setScrollOffset(offset))
    },
  }
}

const SkyBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkyBoxComponent)

export default SkyBoxContainer