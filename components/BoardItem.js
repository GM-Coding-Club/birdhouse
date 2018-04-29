

import React, { Component } from 'react'
import { View } from 'react-native'

class BoardItemComponent extends Component {
  render() {
    return (
      <View style={{
        width: 50,
        height: 50,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1
      }}>
        { this.props.children }
      </View>
    )
  }
}

export default BoardItemComponent