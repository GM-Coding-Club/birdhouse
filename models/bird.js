
import blueJay from '../img/bird_8_32x30.png'
import blueJayAlt from '../img/bird_8_alt_42x28.png'
import baltimoreOriole from '../img/bird_9_28x24.png'
import baltimoreOrioleAlt from '../img/bird_9_alt_42x22.png'
import cardinal from '../img/bird_10_26x26.png'
import cardinalAlt from '../img/bird_10_alt_34x24.png'
import blackCappedChickadee from '../img/bird_6_26x20.png'
import blackCappedChickadeeAlt from '../img/bird_6_alt_34x18.png'
import robin from '../img/bird_4_26x20.png'
import robinAlt from '../img/bird_4_alt_34x18.png'
import blackLeggedKittiwake from '../img/bird_14_38x26.png'
import blackLeggedKittiwakeAlt from '../img/bird_14_alt_56x24.png'
import goldfinich from '../img/bird_5_24x18.png'
import goldfinichAlt from '../img/bird_5_alt_32x18.png'

const BirdType = {
  BlackLeggedKittiwake: 0,
  AmericanRobin: 1,
  BlueJay: 2,
  BlackCappedChickadee: 3,
  Goldfinch: 4,
  Cardinal: 5,
  BaltimoreOriole: 6
}

const BirdPosition = {
  STATIONARY: 0,
  FLYING: 1
}

const BirdDirection = {
  LEFT: 0,
  RIGHT: 1
}

var Bird = (xPos, yPos, type) => {
  let generatedId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  var flyingDirection = undefined
  if (xPos < 0) flyingDirection = BirdDirection.RIGHT
  else flyingDirection = BirdDirection.LEFT
  let currentPosition = BirdPosition.FLYING
  return {
    id: generatedId,
    type: type,
    x: xPos,
    y: yPos,
    direction: flyingDirection,
    position: currentPosition,
    visible: true
  }
}

var BirdSprite = (type, position) => {
  switch (type) {
    case BirdType.BlackLeggedKittiwake:
      return position === BirdPosition.STATIONARY ? blackLeggedKittiwake : blackLeggedKittiwakeAlt
    case BirdType.AmericanRobin:
      return position === BirdPosition.STATIONARY ? robin : robinAlt
    case BirdType.BlueJay:
      return position === BirdPosition.STATIONARY ? blueJay : blueJayAlt
    case BirdType.BlackCappedChickadee:
      return position === BirdPosition.STATIONARY ? blackCappedChickadee : blackCappedChickadeeAlt
    case BirdType.Goldfinch:
      return position === BirdPosition.STATIONARY ? goldfinich : goldfinichAlt
    case BirdType.Cardinal:
      return position === BirdPosition.STATIONARY ? cardinal : cardinalAlt
    case BirdType.BaltimoreOriole:
      return position === BirdPosition.STATIONARY ? baltimoreOriole : baltimoreOrioleAlt
    default:
      return undefined
  }
}

var BirdSize = (type, position) => {
  switch (type) {
    case BirdType.BlackLeggedKittiwake:
        return position === BirdPosition.STATIONARY ? { x:38, y:26 } : { x:56, y:24 }
    case BirdType.AmericanRobin:
      return position === BirdPosition.STATIONARY ? { x:26, y:20 } : { x:34, y:18 }
    case BirdType.BlueJay:
      return position === BirdPosition.STATIONARY ? { x:32, y:30 } : { x:42, y:28 }
    case BirdType.BlackCappedChickadee:
      return position === BirdPosition.STATIONARY ? { x:26, y:26 } : { x:34, y:18 }
    case BirdType.Goldfinch:
      return position === BirdPosition.STATIONARY ? { x:24, y:18 } : { x:32, y:18 }
    case BirdType.Cardinal:
      return position === BirdPosition.STATIONARY ? { x:26, y:26 } : { x:34, y:24 }
    case BirdType.BaltimoreOriole:
      return position === BirdPosition.STATIONARY ? { x:28, y:24 } : { x:42, y:22 }
    default:
      return { x:0, y:0 }
  }
}

export {
  BirdSprite,
  BirdSize,
  BirdType,
  BirdPosition,
  BirdDirection,
  Bird
}