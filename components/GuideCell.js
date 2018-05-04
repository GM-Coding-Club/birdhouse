
import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import { BirdSprite, BirdDescription, BirdPosition } from '../models/'

class GuideCellComponent extends Component {
  render() {
    return (
      <View style={{
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: "#9b9967",
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <View style={{
          width: "30%",
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <View style={{
            width: 60,
            height: 60
          }}>
            <Image source={BirdSprite(this.props.spotting, BirdPosition.STATIONARY)} style={{
              left: "10%",
              top: "10%",
              width: "80%",
              height: "80%",
            }} resizeMode='contain'/>
          </View>
        </View>
        <View style={{
          width: "70%",
          paddingRight: 20
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>{BirdDescription(this.props.spotting)}</Text>
        </View>
      </View>
    )
  }
}

export default GuideCellComponent