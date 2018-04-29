
import { connect } from 'react-redux'
import { setBoardSize } from '../actions'
import { HomeComponent } from '../components/'

const mapStateToProps = (state, ownProps) => {
  return { 
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setWindowSize: (width, height) => {
      dispatch(setBoardSize(width, height))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer