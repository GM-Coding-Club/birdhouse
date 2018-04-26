
import React, { Component } from 'react'
import { View } from 'react-native'
import BoardItemComponent from './BoardItem.js'
import Dimensions from 'Dimensions'

const window = Dimensions.get('window')

const MIN_CELL_WIDTH = 50
const NUMBER_OF_CELL_ROW = Math.floor(window.width / MIN_CELL_WIDTH)
const CELL_WIDTH = window.width / NUMBER_OF_CELL_ROW
const MIN_CELL_ROWS = Math.ceil(window.height / CELL_WIDTH)

class BoardComponent extends Component {
  componentDidMount() {
    this.props.setColumns(NUMBER_OF_CELL_ROW)
    this.props.addRows(MIN_CELL_ROWS)
    /* setTimeout(() => { this.scrollView.scrollToEnd() }, 50) */
  }
  render() {
    return (
      <View style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }}>
      {  
        this.props.cells.map((cell, index) =>
          <BoardItemComponent size={CELL_WIDTH} key={index}/>
        )
      }
      </View>
    )
  }
}

export default BoardComponent