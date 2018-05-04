
import React, { Component } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { BoardContainer } from '../containers/'
import grass from '../img/grass_bg.jpg'
import CloudComponent from './Cloud.js'
import BirdComponent from './Bird.js'

class SkyBoxComponent extends Component {
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
            return <CloudComponent key={cloud.id} {...cloud}/>
          })
        }
        { 
          this.props.birds.map((bird, index) => {
            return <BirdComponent key={bird.id} {...bird}/>
          })
        }
      </ScrollView>
    )
  }
}

export default SkyBoxComponent