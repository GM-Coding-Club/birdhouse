
import { connect } from 'react-redux'
import { MenuBarComponent } from '../components/'
import { showGuide } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    cash: state.cash,
    store: state.store
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showGuide: () => {
      dispatch(showGuide())
    }
  }
}

const MenuBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBarComponent)

export default MenuBarContainer