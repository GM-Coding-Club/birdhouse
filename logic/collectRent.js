
import { receiveCash } from '../actions/'
import { ItemType } from '../models/'

export default function collectRent() {
  return (dispatch, getState) => {
    let cells = getState().board.cells
    var rent = 0
    for (row of cells) {
      for (cell of row) {
        if (cell.item && cell.item.type === ItemType.BIRDHOUSE) {
          rent += cell.item.birds ? cell.items.bird.length : 0
        }
      }
    }
    dispatch(receiveCash(rent))
    return Promise.resolve()
  }
}