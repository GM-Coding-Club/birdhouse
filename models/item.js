
import sunflower from '../img/sunflower.png'
import birdhouseblue from '../img/birdhouse_blue.png'
import birdhousegreen from '../img/birdhouse_green.png'
import pole from '../img/vertical_pole.png'

const ItemType = {
  POLE: 1,
  BIRDHOUSE: 2,
  BIRDHOUSEBIG: 3,
  FEEDER: 4,
  BIRDBATH: 5,
  SUNFLOWER: 6,
  SEEDS: 7,
  NUTS: 8,
  WORMS: 9,
  FRUIT: 10
}

var ItemPrice = (type) => {
  switch (type) {
    case ItemType.POLE:
      return 2
    case ItemType.BIRDHOUSE:
      return 10
    case ItemType.BIRDHOUSEBIG:
      return 40
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
    case ItemType.BIRDHOUSE:
      return birdhouseblue
    case ItemType.BIRDHOUSEBIG:
      return birdhousegreen
    case ItemType.POLE:
      return pole
    default:
      return undefined
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