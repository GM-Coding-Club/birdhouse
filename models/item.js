
const ItemType = {
  EX: 0
}

var getTypePrice = function (type) {
  switch (type) {
    case ItemType.EX:
      return 10
    default:
      return 0
  }
}

var Item = (type) => {
  return {
    type: type,
    price: getTypePrice(type)
  }
}

export {
  ItemType,
  Item
}

export default Item