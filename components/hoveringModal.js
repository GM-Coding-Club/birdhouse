
import React, { Component } from 'react'
import { 
  View,
  Modal
} from 'react-native'

import BoardItemComponent from './BoardItem.js'

class HoveringModalComponent extends Component {
  render() {
    return (
      <Modal transparent={true} visible={this.props.item === undefined ? false : true} supportedOrientations={['landscape']}>
        <View style={{
          width: "100%",
          height: "100%"
        }}>
        {
          this.props.item === undefined ? <View/> : (
            <BoardItemComponent item={this.props.item} style={{
                backgroundColor: this.props.validPlacement ? "rgba (0, 255, 0, 0.3)" : "rgba (255, 0, 0, 0.3)",
                left: this.props.x,
                top: this.props.y
            }}/>
          )
        }
        </View>
      </Modal>
    )
  }
}

export default HoveringModalComponent