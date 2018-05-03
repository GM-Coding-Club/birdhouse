
import { connect } from 'react-redux'
import { MenuBarComponent } from '../components/'
import { showGuide, draggingItem, droppingItem } from '../actions'

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
    },
    draggingItem: (itemType, x, y) => {
      dispatch(draggingItem(itemType, x, y))
    },
    droppingItem: () => {
      dispatch(droppingItem())
    }
  }
}

const MenuBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBarComponent)

export default MenuBarContainer