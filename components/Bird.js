

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { BirdType, BirdPosition, BirdDirection } from '../models/'

import blueJay from '../img/bird_8_32x30.png'
import blueJayAlt from '../img/bird_8_alt_42x28.png'
import baltimoreOriole from '../img/bird_9_28x24.png'
import baltimoreOrioleAlt from '../img/bird_9_alt_42x22.png'
import cardinal from '../img/bird_10_26x26.png'
import cardinalAlt from '../img/bird_10_alt_34x24.png'
import blackCappedChickadee from '../img/bird_6_26x20.png'
import blackCappedChickadeeAlt from '../img/bird_6_alt_34x18.png'
import robin from '../img/bird_4_26x20.png'
import robinAlt from '../img/bird_4_alt_34x18.png'
import blackLeggedKittiwake from '../img/bird_14_38x26.png'
import blackLeggedKittiwakeAlt from '../img/bird_14_alt_56x24.png'
import goldfinich from '../img/bird_5_24x18.png'
import goldfinichAlt from '../img/bird_5_alt_32x18.png'

var typeToImage = (type, position) => {
  switch (type) {
    case BirdType.BlackLeggedKittiwake:
      return position === BirdPosition.STATIONARY ? blackLeggedKittiwake : blackLeggedKittiwakeAlt
    case BirdType.AmericanRobin:
      return position === BirdPosition.STATIONARY ? robin : robinAlt
    case BirdType.BlueJay:
      return position === BirdPosition.STATIONARY ? blueJay : blueJayAlt
    case BirdType.BlackCappedChickadee:
      return position === BirdPosition.STATIONARY ? blackCappedChickadee : blackCappedChickadeeAlt
    case BirdType.Goldfinch:
      return position === BirdPosition.STATIONARY ? goldfinich : goldfinichAlt
    case BirdType.Cardinal:
      return position === BirdPosition.STATIONARY ? cardinal : cardinalAlt
    case BirdType.BaltimoreOriole:
      return position === BirdPosition.STATIONARY ? baltimoreOriole : baltimoreOrioleAlt
    default:
      return undefined
  }
}

export var typeToSize = (type, position) => {
  switch (type) {
    case BirdType.BlackLeggedKittiwake:
        return position === BirdPosition.STATIONARY ? { x:38, y:26 } : { x:56, y:24 }
    case BirdType.AmericanRobin:
      return position === BirdPosition.STATIONARY ? { x:26, y:20 } : { x:34, y:18 }
    case BirdType.BlueJay:
      return position === BirdPosition.STATIONARY ? { x:32, y:30 } : { x:42, y:28 }
    case BirdType.BlackCappedChickadee:
      return position === BirdPosition.STATIONARY ? { x:26, y:26 } : { x:34, y:18 }
    case BirdType.Goldfinch:
      return position === BirdPosition.STATIONARY ? { x:24, y:18 } : { x:32, y:18 }
    case BirdType.Cardinal:
      return position === BirdPosition.STATIONARY ? { x:26, y:26 } : { x:34, y:24 }
    case BirdType.BaltimoreOriole:
      return position === BirdPosition.STATIONARY ? { x:28, y:24 } : { x:42, y:22 }
    default:
      return { x:0, y:0 }
  }
}

class BirdComponent extends Component {
  render() {
    return (
      <Image source={typeToImage(this.props.type)} style={{
        position: "absolute",
        zIndex: 1,
        width: typeToSize(this.props.type).x, 
        height: typeToSize(this.props.type).y,
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