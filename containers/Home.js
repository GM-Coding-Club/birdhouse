
import { connect } from 'react-redux'
import { spendCash, receiveCash } from '../actions'
import { HomeComponent } from '../components/'

const mapStateToProps = (state, ownProps) => {
  return {
    cash: state.cash
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    spendCash: (amount) => {
      dispatch(spendCash(amount))
    },
    receiveCash: (amount) => {
      dispatch(receiveCash(amount))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)

export default HomeContainer