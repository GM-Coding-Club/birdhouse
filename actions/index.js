
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

export const SPOTTED_BIRD = 'SPOTTED_BIRD'

export function spottedBird(birdType) {
  return {
    type: SPOTTED_BIRD,
    birdType
  }
}

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

export const SET_BOARD_ITEM = 'SET_BOARD_ITEM'

export function setBoardItem(item, x, y) {
  return {
    type: SET_BOARD_ITEM,
    item,
    x,
    y
  }
}

export const SET_BOARD_HOVER = 'SET_BOARD_HOVER'

export function setBoardHover(hovered, x, y) {
  return {
    type: SET_BOARD_HOVER,
    hovered, 
    x,
    y
  }
}

export const SET_SCROLL_OFFSET = 'SET_SCROLL_OFFSET'

export function setScrollOffset(offset) {
  return {
    type: SET_SCROLL_OFFSET,
    offset
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

export const SPAWN_BIRD = 'SPAWN_BIRD'

export function spawnBird(birdType, x, y) {
  return {
    type: SPAWN_BIRD,
    birdType,
    x,
    y
  }
}

export const STOP_BIRD = 'STOP_BIRD'

export function stopBird(id) {
  return {
    type: STOP_BIRD,
    id
  }
}

export const START_BIRD = 'START_BIRD'

export function startBird(id) {
  return {
    type: START_BIRD,
    id
  }
}

export const HIDE_BIRD = 'HIDE_BIRD'

export function hideBird(id) {
  return {
    type: HIDE_BIRD,
    id
  }
}

export const SHOW_BIRD = 'SHOW_BIRD'

export function showBird(id) {
  return {
    type: SHOW_BIRD,
    id
  }
}

// STORE

export const ITEM_DRAGGING = 'ITEM_DRAGGING'

export function draggingItem(itemType, x, y) {
  return {
    type: ITEM_DRAGGING,
    itemType,
    x,
    y
  }
}

export const ITEM_DROP = 'ITEM_DROP'

export function droppingItem(itemType, x, y) {
  return {
    type: ITEM_DROP,
    itemType,
    x,
    y
  }
}

export const ITEM_PURCHASE = 'ITEM_PURCHASE'

export function purchaseItem(itemType) {
  return {
    type: ITEM_PURCHASE,
    itemType
  }
}

export const ITEM_ENABLE = 'ITEM_ENABLE'

export function enableItem(itemType) {
  return {
    type: ITEM_ENABLE,
    itemType
  }
}

export const ITEM_DISABLE = 'ITEM_DISABLE'

export function disableItem(itemType) {
  return {
    type: ITEM_DISABLE,
    itemType
  }
}