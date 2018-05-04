

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { 
  BirdType, 
  BirdPosition, 
  BirdDirection,
  BirdSize,
  BirdSprite
} from '../models/'

class BirdComponent extends Component {
  render() {
    return (
      <Image source={BirdSprite(this.props.type, this.props.position)} style={{
        position: "absolute",
        zIndex: 1,
        width: BirdSize(this.props.type, this.props.position).x, 
        height: BirdSize(this.props.type, this.props.position).y,
        left: this.props.x,
        bottom: this.props.y,
        transform: (this.props.direction == BirdDirection.LEFT ? [
          { scaleX: -1 }
        ] : [
          { scaleX: 1 }
        ])
      }}/>
    )
  }
}

export default BirdComponent