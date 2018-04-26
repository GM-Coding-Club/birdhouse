
import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { BoardContainer } from '../containers/'
import grass from '../img/grass_bg.jpg'
import CloudComponent from './Cloud.js'

class SkyBoxComponent extends Component {
  componentDidMount() {
    this.props.spawnCloud(0,0)
  }
  render() {
    return (
      <ScrollView style={{
        backgroundColor: '#70C5CE',
      }} contentOffset={{
        x: 0,
        y: 0
      }} ref={(ref) => { 
        this.scrollView = ref
      }}>
        <BoardContainer/>
        <Image source={grass} style={{
          flex: 1, 
          width: "100%", 
          height: 40, 
          bottom: 0,
          resizeMode: "stretch"
        }}/>
        { 
          this.props.clouds.map((cloud, index) => {
            return <CloudComponent key={cloud.id} type={cloud.type} x={cloud.x} y={cloud.y}/>
          })
        }
      </ScrollView>
    )
  }
}

export default SkyBoxComponent