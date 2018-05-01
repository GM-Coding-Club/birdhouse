
import React, { Component } from 'react'
import { 
  Image, 
  ScrollView, 
  View,
  TouchableHighlight,
  Text,
  ImageBackground,
  Modal
} from 'react-native'
import menuBG from '../img/menu_bg.png'
import close from '../img/close_button.png'

class SpottedModalComponent extends Component {
  render() {
    return (
      <Modal transparent={true} visible={this.props.visible} supportedOrientations={['landscape']}>
        <View style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          width: "100%",
          height: "100%",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: "50%",
            height: "50%",
            minWidth: 400,
            minHeight: 300
          }}>
            <ImageBackground source={menuBG} style={{ 
              width: "100%", 
              height: "100%",
            }} imageStyle={{ 
              resizeMode: 'stretch' 
            }}>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    )
  }
}

export default SpottedModalComponent