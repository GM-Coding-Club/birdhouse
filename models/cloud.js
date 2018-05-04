
import cloud1 from '../img/cloud_1.png'
import cloud2 from '../img/cloud_2.png'
import cloud3 from '../img/cloud_3.png'
import cloud4 from '../img/cloud_4.png'
import cloud5 from '../img/cloud_5.png'
import cloud6 from '../img/cloud_6.png'
import cloud7 from '../img/cloud_7.png'
import cloud8 from '../img/cloud_8.png'

const CloudType = {
  FULL: 1,
  MEDIUM: 2,
  PEANUT: 3,
  WAVE: 4,
  SMALL: 5,
  HOOK: 6,
  TRIPLE: 7,
  BURST: 8
}

const CloudDirection = {
  LEFT: 0,
  RIGHT: 1
}

var Cloud = (xPos, yPos, direction) => {
  let type = Math.floor(Math.random() * 8) + 1
  let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  let dir = (direction !== undefined) ? direction : Math.round(Math.random()) // 0 or 1
  return {
    id: id,
    type: type,
    direction: dir,
    x: xPos,
    y: yPos
  }
}

var CloudSprite = (type) => {
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
  return undefined
}

export {
  Cloud,
  CloudDirection,
  CloudType,
  CloudSprite
}

export default Cloud