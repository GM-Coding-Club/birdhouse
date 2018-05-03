
import React, { Component } from 'react'
import { View } from 'react-native'
import BoardItemComponent from './BoardItem.js'

class BoardRowComponent extends Component {
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        {
          this.props.row.map((col, colIndex) =>
            <BoardItemComponent {...col} key={colIndex}/>
          )
        }
      </View>
    )
  }
}

export default BoardRowComponent