
import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { CloudType } from '../models/'

import cloud1 from '../img/cloud_1.png'
import cloud2 from '../img/cloud_2.png'
import cloud3 from '../img/cloud_3.png'
import cloud4 from '../img/cloud_4.png'
import cloud5 from '../img/cloud_5.png'
import cloud6 from '../img/cloud_6.png'
import cloud7 from '../img/cloud_7.png'
import cloud8 from '../img/cloud_8.png'

var typeToImage = (type) => {
  switch (type) {
    case CloudType.FULL:
      return cloud1
    case CloudType.MEDIUM:
      return cloud2
    case CloudType.PEANUT:
      return cloud3
    case CloudType.WAVE:
      return cloud4
    case CloudType.SMALL:
      return cloud5
    case CloudType.HOOK:
      return cloud6
    case CloudType.TRIPLE:
      return cloud7
    case CloudType.BURST:
      return cloud8
  }
  return 0
}

class CloudComponent extends Component {
  render() {
    return (
      <Image source={typeToImage(this.props.type)} style={{
        position: "absolute",
        zIndex: -1,
        width: 256, 
        height: 256,
        left: this.props.x,
        bottom: this.props.y
      }}/>
    )
  }
}

export default CloudComponent