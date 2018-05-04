

import React, { Component } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { ItemType, ItemSprite } from '../models/'
import { CELL_WIDTH } from '../reducers/board.js'

var itemSprite = (item) => {
  if (!item) return undefined
  else ItemSprite(item.type)
}

class BoardItemComponent extends Component {
  render() {
    return (
      <View style={{
        width: CELL_WIDTH,
        height: CELL_WIDTH,
        borderColor: "rgba(0,0,0,0.1)",
        borderWidth: 1,
        backgroundColor: this.props.hovered ? "rgba(0,0,0,0.3)" : "transparent",
        ...this.props.style
      }}>
        <Image source={itemSprite(this.props.item)} style={{
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