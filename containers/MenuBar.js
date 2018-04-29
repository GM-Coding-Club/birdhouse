
import { connect } from 'react-redux'
import { MenuBarComponent } from '../components/'
import { } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    cash: state.cash,
    store: state.store
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const MenuBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBarComponent)

export default MenuBarContainer