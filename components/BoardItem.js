

import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { ItemType } from '../models/'
import robin from '../img/bird_10_26x26.png'

export const ITEM_SIZE = 50

var getEmblem = (itemType) => {
  if (itemType === undefined) return undefined
  switch (itemType) {
    case ItemType.STAKE:
      return robin
    case ItemType.POLE:
      return robin
    case ItemType.BIRDHOUSE:
      return robin
    case ItemType.FEEDER:
      return robin
    case ItemType.BIRDBATH:
      return robin
    case ItemType.FLOWERS:
      return robin
    default:
      return robin
  }
}

class BoardItemComponent extends Component {
  render() {
    return (
      <View style={{
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        ...this.props.style
      }}>
        <Image source={getEmblem(this.props.itemType)} style={{
          left: "20%",
          top: "16%",
          width: "60%",
          height: "60%"
        }}/>
      </View>
    )
  }
}

export default BoardItemComponent