
import React, { Component } from 'react'
import { 
  PanResponder,
  TouchableHighlight, 
  Image, 
  ImageBackground, 
  View,
  Animated
} from 'react-native'
import { ItemType } from '../models/'

import brownTile from '../img/brown_tile.png'
import grayTile from '../img/gray_tile.png'
import robin from '../img/bird_10_26x26.png'

var getEmblem = (item) => {
  if (!item) return undefined
  switch (item.type) {
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
    case ItemType.SEEDS:
      return robin
    case ItemType.NUTS:
      return robin
    case ItemType.WORMS:
      return robin
    case ItemType.FRUIT:
      return robin
    default:
      return robin
  }
}

class MenuTileComponent extends Component {
  componentWillMount() {
    if (!this.props.gray) {
      this._panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (event, gestureState) => {
          let x = event.nativeEvent.pageX
          let y = event.nativeEvent.pageY
          this.props.dragItem(this.props.item.type, x, y)
        },
        onPanResponderMove: (event, gestureState) => {
          let x = event.nativeEvent.pageX
          let y = event.nativeEvent.pageY
          this.props.dragItem(this.props.item.type, x, y)
        },
        onPanResponderTerminate: (event, gestureState) => {
          let x = event.nativeEvent.pageX
          let y = event.nativeEvent.pageY
          this.props.dropItem(this.props.item.type, x, y)
        },
        onPanResponderRelease: (event, gestureState) => {
          let x = event.nativeEvent.pageX
          let y = event.nativeEvent.pageY
          this.props.dropItem(this.props.item.type, x, y)
        }
      })
    } else {
      this._panResponder = PanResponder.create({
        onMoveShouldSetResponderCapture: () => false,
        onMoveShouldSetPanResponderCapture: () => false,
      })
    }
  }

  render() {
    return (
      <View style={this.props.style} {...this._panResponder.panHandlers}>
        <TouchableHighlight onPress={this.props.onPress}>
          <ImageBackground source={this.props.gray ? grayTile : brownTile} style={{ 
            width: "100%", 
            height: "100%"
          }} imageStyle={{ 
            resizeMode:'stretch' 
          }}>
            <Image source={this.props.emblem ? this.props.emblem : getEmblem(this.props.item)} style={{
              left: "20%",
              top: "16%",
              width: "60%",
              height: "60%"
            }}/>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    )
  }
}

export default MenuTileComponent