
import React, { Component } from 'react'
import { View } from 'react-native'
import BoardRowComponent from './BoardRow.js'

class BoardComponent extends Component {
  componentDidMount() {
    /* setTimeout(() => { this.scrollView.scrollToEnd() }, 50) */
  }
  render() {
    return (
      <View style={{
        flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row'
      }}>
      {
        this.props.cells.map((row, rowIndex) =>
          <BoardRowComponent row={row} key={rowIndex}/>
        )
      }
      </View>
    )
  }
}

export default BoardComponent