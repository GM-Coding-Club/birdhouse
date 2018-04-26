

import React, { Component } from 'react'
import { View } from 'react-native'

class BoardItemComponent extends Component {
  render() {
    return (
      <View style={{ 
        backgroundColor: "transparent",
        width: this.props.size,
        height: this.props.size,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: (this.props.size/100)
      }}>
        { this.props.children }
      </View>
    )
  }
}

export default BoardItemComponent