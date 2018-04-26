
import React, { Component } from 'react'
import { View } from 'react-native'

class SkyBoxComponent extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: "#70C5CE"
      }}>
        { this.props.children }
      </View>
    )
  }
}

export default SkyBoxComponent