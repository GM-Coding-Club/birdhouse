
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import SkyBoxComponent from './SkyBox.js'
import { BoardContainer } from '../containers/'

var playBackgroundMusic = () => {
  var backgroundMusic = new Sound('lost_jungle_looping.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error)
      return
    }
    backgroundMusic.setNumberOfLoops(-1)
    //backgroundMusic.play()
  })
}

export default class Home extends React.Component {

  componentDidMount() {
    Orientation.lockToLandscape()
    playBackgroundMusic()
  }

  render() {
    return (
      <BoardContainer/>
    )
  }
}