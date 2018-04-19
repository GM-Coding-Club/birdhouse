
import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store.js'
import { HomeContainer } from './containers/'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer/>
      </Provider>
    )
  }
}