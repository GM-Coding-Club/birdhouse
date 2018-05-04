
import { connect } from 'react-redux'
import { SkyBoxComponent } from '../components/'

const mapStateToProps = (state, ownProps) => {
  return {
    clouds: state.clouds,
    birds: state.birds
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const SkyBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkyBoxComponent)

export default SkyBoxContainer