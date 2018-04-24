
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Orientation from 'react-native-orientation'
import Sound from 'react-native-sound'

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
    Orientation.lockToLandscape()
    playBackgroundMusic()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dan the man is the man</Text>
        <Text>Dan the man is the man</Text>
        <Text>Dan the man is the man, who is a man, which is a man?</Text>
        <Text>This is some text?</Text>
        <Text>This is some text??</Text>
        <Text>This is some text????</Text>
        <Text>This is some text?????</Text>
        <Text>This is some text??????</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
