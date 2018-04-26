
// GAME

export const GAME_TICK = 'GAME_TICK'

export function gameTick() {
  return {
    type: GAME_TICK
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

export const SET_CELL_COLUMNS = 'SET_CELL_COLUMNS'

export function setCellColumns(number) {
  return {
    type: SET_CELL_COLUMNS,
    number: (number > 0 ? number : 0)
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