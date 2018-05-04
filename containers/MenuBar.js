
import { connect } from 'react-redux'
import { MenuBarComponent } from '../components/'
import { showGuide } from '../actions'
import { dropItem, dragItem } from '../logic/' 

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
    dragItem: (itemType, x, y) => {
      dispatch(dragItem(itemType, x, y))
    },
    dropItem: (itemType, x, y) => {
      dispatch(dropItem(itemType, x, y))
    }
  }
}

const MenuBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBarComponent)

export default MenuBarContainer