
import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'

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
            <Image source={this.props.emblem} style={{
              left: "10%",
              top: "10%",
              width: "80%",
              height: "80%"
            }}/>
          </View>
        </View>
        <View style={{
          width: "70%"
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}

export default GuideCellComponent