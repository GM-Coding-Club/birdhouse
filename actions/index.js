
// GAME

export const GAME_TICK = 'GAME_TICK'

export function gameTick() {
  return {
    type: GAME_TICK
  }
}

// GUIDE

export const SHOW_GUIDE = 'SHOW_GUIDE'

export function showGuide() {
  return {
    type: SHOW_GUIDE
  }
}

export const HIDE_GUIDE = 'HIDE_GUIDE'

export function hideGuide() {
  return {
    type: HIDE_GUIDE
  }
}

// SPOTTED

// look at the guide actions
// but consider that we must know what bird we spotted

// BIRDHOUSE

export const SHOW_BIRDHOUSE = 'SHOW_BIRDHOUSE'

export function showBirdhouse(location) {
  return {
    type: SHOW_BIRDHOUSE,
    location
  }
}

export const HIDE_BIRDHOUSE = 'HIDE_BIRDHOUSE'

export function hideBirdhouse() {
  return {
    type: HIDE_BIRDHOUSE
  }
}

// CASH

export const RECEIVE_CASH = 'RECEIVE_CASH'

export function receiveCash(amount) {
  return {
    type: RECEIVE_CASH,
    amount: (amount > 0 ? amount : 0)
  }
}

export const SPEND_CASH = 'SPEND_CASH'

export function spendCash(amount) {
  return {
    type: SPEND_CASH,
    amount: (amount > 0 ? amount : 0)
  }
}

// BOARD

export const SET_BOARD_SIZE = 'SET_BOARD_SIZE'

export function setBoardSize(width, height) {
  return {
    type: SET_BOARD_SIZE,
    width,
    height
  }
}

export const ADD_ROWS = 'ADD_ROWS'

export function addCellRows(rows) {
  return {
    type: ADD_ROWS,
    rows: (rows > 0 ? rows : 0)
  }
}

// CLOUD

export const SPAWN_CLOUD = 'SPAWN_CLOUD'

export function spawnCloud(xPos, yPos) {
  return {
    type: SPAWN_CLOUD,
    x: xPos,
    y: yPos
  }
}

export const MOVE_CLOUD = 'MOVE_CLOUD'

export function moveCloud(id, value) {
  return {
    type: MOVE_CLOUD,
    id,
    value
  }
}

// BIRD

// spawn bird (row)

// move bird, horizontal

// stop bird

// start bird

// hide bird

// show bird

//item enable
export const ITEM_ENABLE = 'ITEM_ENABLE'

export function enableItem(itemType){
  return {
    type: ITEM_ENABLE,
    itemType
    
  }
}

//start dragging

export const ITEM_START_DRAGGING = 'ITEM_START_DRAGGING'

export function draggingItem(itemType){
  return{
    type: ITEM_START_DRAGGING,
    itemType
  }
}

//purchase
export const ITEM_PURCHASE = 'ITEM_PURCHASE'

export function purchaseItem(itemType){
  return{
    type: ITEM_PURCHASE,
    itemType
  }
}


//item disable
export const ITEM_DISABLE = 'ITEM_DISABLE'

export function disableItem(itemType){
  return{
    type: ITEM_DISABLE,
    itemType
  }
}
