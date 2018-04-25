
import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

class BoardComponent extends Component {
  render() {
    return (
      <InvertibleScrollView inverted ref={(ref) => { 
          this.scrollView = ref
      }} onContentSizeChange={() => {
        this.scrollView.scrollTo({ y: 0, animated: true })
      }} style={{
        backgroundColor: "#70C5CE"
      }}>
        <Text style={{fontSize:96}}>1</Text>
        <Text style={{fontSize:96}}>2</Text>
        <Text style={{fontSize:96}}>3</Text>
        <Text style={{fontSize:96}}>4</Text>
        <Text style={{fontSize:96}}>5</Text>
      </InvertibleScrollView>
    )
  }
}

// "#70C5CE"

/*
<ScrollView showsVerticalScrollIndicator={false} style={{
        backgroundColor: "#70C5CE"
      }}>
        <Text style={{fontSize:96}}>1</Text>
        <Text style={{fontSize:96}}>2</Text>
        <Text style={{fontSize:96}}>3</Text>
        <Text style={{fontSize:96}}>4</Text>
        <Text style={{fontSize:96}}>5</Text>
      </ScrollView>
      */

export default BoardComponent