
import robin from '../img/bird_10_26x26.png'

const ItemType = {
  STAKE: 0,
  POLE: 1,
  BIRDHOUSE: 2,
  FEEDER: 3,
  BIRDBATH: 4,
  FLOWERS: 5,
  SEEDS: 6,
  NUTS: 7,
  WORMS: 8,
  FRUIT: 9
}

var ItemPrice = (type) => {
  switch (type) {
    case ItemType.STAKE:
      return 100
    case ItemType.POLE:
      return 2
    case ItemType.BIRDHOUSE:
      return 10
    case ItemType.FEEDER:
      return 40
    case ItemType.BIRDBATH:
      return 100
    case ItemType.FLOWERS:
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
    case ItemType.STAKE:
      return robin
    case ItemType.POLE:
      return robin
    case ItemType.BIRDHOUSE:
      return robin
    case ItemType.FEEDER:
      return robin
    case ItemType.BIRDBATH:
      return robin
    case ItemType.FLOWERS:
      return robin
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