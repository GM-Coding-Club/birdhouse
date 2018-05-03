
import React, { Component } from 'react'
import { 
  View,
  Modal
} from 'react-native'

import BoardItemComponent from './BoardItem.js'

class HoveringModalComponent extends Component {
  render() {
    return (
      <Modal transparent={true} visible={this.props.itemType === undefined ? false : true} supportedOrientations={['landscape']}>
        <View style={{
          width: "100%",
          height: "100%"
        }}>
        {
          this.props.itemType === undefined ? <View/> : (
            <BoardItemComponent itemType={this.props.itemType} style={{
              zIndex: 1000,
              left: this.props.x,
              top: this.props.y,
              backgroundColor: this.props.validPlacement ? "transparent" : "rgba(255,0,0,0.3)"
            }}/>
          )
        }
        </View>
      </Modal>
    )
  }
}

export default HoveringModalComponent