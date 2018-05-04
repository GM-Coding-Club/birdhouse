
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

var BirdDescription = (type) => {
  switch (type) {
    case BirdType.BlackLeggedKittiwake:
      return "A small bird, with a white body and gray, black-tipped wings. Also, it has black legs. They like to eat fish. It is the only gall that dives and swims underwater. After they give birth the parents take turns hunting and then bring back food with them. They store the food in their crop, a pouch near their throat."
    case BirdType.AmericanRobin:
      return "They have warm orange bellies, cheery songs, gray backs, and black heads. They like to eat worms and berries. They actually eat more worms in the morning and more berries in the afternoon."
    case BirdType.BlueJay:
      return "Blue Jays are very common song birds. They are large with blue, black and white feathers. They have noisy calls. They are known for intelligence and tight family bonds. They like peanuts and sunflower seeds, and often take drinks from bird baths."
    case BirdType.BlackCappedChickadee:
      return "They are known for their bid round head, tiny body, and curiosity about everything. They have black heads and chins, white cheeks and underside, and a gray back, wings and tail. It is usually one of the first birds people see after setting up a bird feeder. They like sunflowers and peanuts. They also like willow, alder and birch trees."
    case BirdType.Goldfinch:
      return "They have yellow bodies and heads with black wings, tail and top of head. They like to eat sunflower, nyjer, and milkweed. They are the state bird of New Jersey, Iowa, and Washington."
    case BirdType.Cardinal:
      return "Males are red with black face, while females are brown with a black face. They like sunflower seeds a lot, but will eat most bird foods. The female birds are one of the few songbirds that sing."
    case BirdType.BaltimoreOriole:
      return "They have a beautiful whistling song. They have orange and yellow bellies and black heads and backs. They love eating fruit, nectar, and insects. They are attracted to ripe fruits and like fruit trees."
    default:
      return ""
  }
}

export {
  BirdSprite,
  BirdSize,
  BirdType,
  BirdPosition,
  BirdDirection,
  BirdDescription,
  Bird
}