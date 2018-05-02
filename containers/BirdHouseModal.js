
import { connect } from 'react-redux'
import { BirdHouseModalComponent } from '../components/'
import {  } from '../actions'

var compiledItem = (birdhouse, board) => {
  if (birdhouse.location) {
    let x = birdhouse.location.x
    let y = birdhouse.location.y
    if (board.cells.length >= x+1 && board.cells[x].length >= y+1) {
      return board.cells[x][y]
    }
  }
  return undefined
}

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.birdhouse.visible,
    item: compiledItem(state.birdhouse, state.board)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const BirdHouseModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BirdHouseModalComponent)

export default BirdHouseModalContainer