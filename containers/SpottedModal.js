
import { connect } from 'react-redux'
import { SpottedModalComponent } from '../components/'
import {  } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.spotted.visible,
    bird: state.spotted.bird
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const SpottedModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpottedModalComponent)

export default SpottedModalContainer