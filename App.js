
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store.js'
import { HomeContainer } from './containers/'
import gameTick from './logic/'

setInterval(() => {
  store.dispatch(gameTick())
}, 1000/24)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer/>
      </Provider>
    )
  }
}