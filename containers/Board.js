
import { connect } from 'react-redux'
import { BoardComponent } from '../components/'
import { addCellRows } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    cells: state.board.cells,
    rows: state.board.rows,
    cols: state.board.cols
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addRows: (rows) => {
      dispatch(addCellRows(rows))
    }
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardComponent)

export default BoardContainer