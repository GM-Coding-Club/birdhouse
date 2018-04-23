
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Orientation from 'react-native-orientation'

export default class Home extends React.Component {

  componentDidMount() {
    Orientation.lockToLandscape()
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
