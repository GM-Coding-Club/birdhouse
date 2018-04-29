
import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import MenuTileComponent from './MenuTile.js'
//import menuBg from '../img/menu_bg.png'
// <Image source={menuBg} style={{ width: "100%", height: "100%", resizeMode: "stretch" }}/>
import robin from '../img/bird_10_26x26.png'

class MenuBarComponent extends Component {
  render() {
    return (
      <View style={{
        zIndex: 1000,
        position: "absolute",
        top: 0,
        width: "100%",
        height: 50
      }}>
        <View style={{
          backgroundColor: "#2968af",
          width: "100%",
          height: 30
        }}>
          <Text style={{
            top: 2,
            left: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>💰 0</Text>
        </View>
        <View style={{
          position: 'absolute',
          left: 100,
          right: 0,
          height: 50,
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}>
          <View style={{ 
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-around"
          }}>
            <MenuTileComponent style={{ width: 50, height: 50 }}/>
            <MenuTileComponent style={{ width: 50, height: 50 }}/>
            <MenuTileComponent style={{ width: 50, height: 50 }}/>
          </View>
          <View style={{ 
            width: "20%",
            flexDirection: "row",
            justifyContent: "flex-end"
          }}>
            <MenuTileComponent style={{ width: 50, height: 50 }} gray={true} emblem={robin}/>
          </View>
        </View>
      </View>
    )
  }
}

export default MenuBarComponent