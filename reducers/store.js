
import { Item, ItemType } from '../models/'
import { DEFAULT_CASH } from '../reducers/cash.js'

var itemWrapper = (item) => {
  return {
    enabled: (item.price <= DEFAULT_CASH ? true : false),
    item
  }
}

let initialState = [
  itemWrapper(Item(ItemType.POLE)),
  itemWrapper(Item(ItemType.BIRDHOUSE)),
  itemWrapper(Item(ItemType.FEEDER)),
  itemWrapper(Item(ItemType.BIRDBATH)),
  itemWrapper(Item(ItemType.SUNFLOWER)),
  itemWrapper(Item(ItemType.SEEDS)),
  itemWrapper(Item(ItemType.NUTS)),
  itemWrapper(Item(ItemType.WORMS)),
  itemWrapper(Item(ItemType.FRUIT))
]

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
 
export default storeReducer