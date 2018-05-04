
import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { CloudSprite } from '../models/'

class CloudComponent extends Component {
  render() {
    return (
      <Image source={CloudSprite(this.props.type)} style={{
        position: "absolute",
        zIndex: -1,
        width: 256, 
        height: 256,
        left: this.props.x,
        bottom: this.props.y
      }}/>
    )
  }
}

export default CloudComponent