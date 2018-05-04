
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store.js'
import { HomeContainer } from './containers/'
import { gameTick, secondTick } from './logic/'

setInterval(() => {
  store.dispatch(gameTick())
}, 1000/24)

setInterval(() => {
  store.dispatch(secondTick())
}, 1000)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer/>
      </Provider>
    )
  }
}