
import React, { Component } from 'react'
import { TouchableHighlight, Image, ImageBackground, View } from 'react-native'
import brownTile from '../img/brown_tile.png'
import grayTile from '../img/gray_tile.png'

class MenuTileComponent extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight onPress={this.props.onPress}>
          <ImageBackground source={ this.props.gray ? grayTile : brownTile} style={{ 
            width: "100%", 
            height: "100%"
          }} imageStyle={{ 
            resizeMode:'stretch' 
          }}>
            <Image source={this.props.emblem} style={{
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