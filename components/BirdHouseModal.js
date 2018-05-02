
import React, { Component } from 'react'
import { 
  View,
  Modal
} from 'react-native'

import BoardItemComponent from './BoardItem.js'

class BirdHouseModalComponent extends Component {
  render() {
    return (
      <Modal transparent={true} visible={this.props.visible} supportedOrientations={['landscape']}>
        <View style={{
          width: "100%",
          height: "100%"
        }}>
        </View>
      </Modal>
    )
  }
}

export default BirdHouseModalComponent