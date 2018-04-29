
import React from 'react'
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'
import { SkyBoxContainer } from '../containers/'
import Dimensions from 'Dimensions'

var playBackgroundMusic = () => {
  var backgroundMusic = new Sound('lost_jungle_looping.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error)
      return
    }
    backgroundMusic.setNumberOfLoops(-1)
    backgroundMusic.play()
  })
}

export default class Home extends React.Component {

  componentDidMount() {
    let initialOrientation = Orientation.getInitialOrientation()
    if (initialOrientation === 'LANDSCAPE') this._windowIsLandscape()
    Orientation.lockToLandscape()
    Orientation.addOrientationListener(this._orientationDidChange)
    playBackgroundMusic()
  }

  _windowIsLandscape = () => {
    let window = Dimensions.get('window')
    this.props.setWindowSize(window.width, window.height)
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') { // only firing in landscape
      this._windowIsLandscape()
    }
  }

  render() {
    return (
      <SkyBoxContainer/>
    )
  }
}