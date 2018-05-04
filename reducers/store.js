
import { Item, ItemType } from '../models/'
import { DEFAULT_CASH } from '../reducers/cash.js'

let initialState = [
  Item(ItemType.POLE),
  Item(ItemType.BIRDHOUSE),
  Item(ItemType.BIRDHOUSEBIG),
  //Item(ItemType.FEEDER),
  //Item(ItemType.BIRDBATH),
  Item(ItemType.SUNFLOWER),
  //Item(ItemType.SEEDS),
  //Item(ItemType.NUTS),
  //Item(ItemType.WORMS),
  //Item(ItemType.FRUIT)
]

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
 
export default storeReducer