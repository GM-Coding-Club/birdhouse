
import React, { Component } from 'react'
import { 
  PanResponder,
  TouchableHighlight, 
  Image, 
  ImageBackground, 
  View,
  Animated
} from 'react-native'
import { ItemType, ItemSprite } from '../models/'

import brownTile from '../img/brown_tile.png'
import grayTile from '../img/gray_tile.png'

class MenuTileComponent extends Component {
  componentWillMount() {
    if (!this.props.gray && this.props.enabled) {
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
      <View style={{
        opacity: this.props.enabled ? 1 : 0.3,
        ...this.props.style
      }} {...this._panResponder.panHandlers}>
        <TouchableHighlight onPress={this.props.onPress}>
          <ImageBackground source={this.props.gray ? grayTile : brownTile} style={{ 
            width: "100%", 
            height: "100%"
          }} imageStyle={{ 
            resizeMode:'stretch' 
          }}>
            <Image source={this.props.emblem ? this.props.emblem : ItemSprite(this.props.item.type)} style={{
              left: "20%",
              top: "16%",
              width: "60%",
              height: "60%"
            }} resizeMode='contain'/>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    )
  }
}

export default MenuTileComponent