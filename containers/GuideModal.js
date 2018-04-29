
import { connect } from 'react-redux'
import { GuideModalComponent } from '../components/'
import { hideGuide } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    visible: state.guide.visible
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideGuide: () => {
      dispatch(hideGuide())
    }
  }
}

const GuideModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideModalComponent)

export default GuideModalContainer