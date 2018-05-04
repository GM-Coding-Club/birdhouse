
import robin from '../img/bird_10_26x26.png'
import sunflower from '../img/sunflower.png'

const ItemType = {
  POLE: 1,
  BIRDHOUSE: 2,
  FEEDER: 3,
  BIRDBATH: 4,
  SUNFLOWER: 5,
  SEEDS: 6,
  NUTS: 7,
  WORMS: 8,
  FRUIT: 9
}

var ItemPrice = (type) => {
  switch (type) {
    case ItemType.POLE:
      return 2
    case ItemType.BIRDHOUSE:
      return 10
    case ItemType.FEEDER:
      return 40
    case ItemType.BIRDBATH:
      return 100
    case ItemType.SUNFLOWER:
      return 50
    case ItemType.SEEDS:
      return 4
    case ItemType.NUTS:
      return 4
    case ItemType.WORMS:
      return 6
    case ItemType.FRUIT:
      return 8
    default:
      return 0
  }
}

var ItemSprite = (type) => {
  switch (type) {
    case ItemType.SUNFLOWER:
      return sunflower
    default:
      return robin
  }
}

var Item = (type) => {
  return {
    type: type,
    price: ItemPrice(type)
  }
}

export {
  ItemSprite,
  ItemPrice,
  ItemType,
  Item
}

export default Item