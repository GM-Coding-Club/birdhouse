
import { connect } from 'react-redux'
import { HoveringModalComponent } from '../components/'
import { } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return state.hovering
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { }
}

const HoveringModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HoveringModalComponent)

export default HoveringModalContainer