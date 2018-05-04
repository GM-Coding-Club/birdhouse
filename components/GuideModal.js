
import React, { Component } from 'react'
import { 
  Image, 
  ImageBackground, 
  View, 
  Text, 
  TouchableHighlight, 
  Modal,
  ScrollView
} from 'react-native'
import menuBG from '../img/menu_bg.png'
import close from '../img/close_button.png'
import GuideCellComponent from './GuideCell.js'

class GuideModalComponent extends Component {
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
              overflow: "hidden",
              paddingTop: 20,
              paddingBottom: 20
            }} imageStyle={{ 
              resizeMode: 'stretch' 
            }}>
              <TouchableHighlight onPress={this.props.hideGuide}>
                <Image source={close} style={{
                  position: "absolute",
                  right: 0,
                  top: 0
                }}/>
              </TouchableHighlight>
              <ScrollView style={{
                left: "10%",
                right: "10%", 
                width: "80%",
                flex: 1, 
                alignSelf: 'flex-start', 
                flexDirection: 'column'
              }}>
                {
                  this.props.spottings.length > 0 ? 
                    this.props.spottings.map((spotting, index) =>
                      <GuideCellComponent spotting={spotting} key={index}/>
                    ) : 
                    <Text style={{
                      fontSize: 40,
                      fontWeight: 'bold',
                      color: 'white'
                    }}>You haven't spotted any birds yet 😱</Text>
                }
              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    )
  }
}

export default GuideModalComponent