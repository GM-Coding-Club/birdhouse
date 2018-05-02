
const BirdType = {
  BlackLeggedKittiwake: 0,
  AmericanRobin: 1,
  BlueJay: 2,
  BlackCappedChickadee: 3,
  Goldfinch: 4,
  Cardinal: 5,
  BaltimoreOriole: 6
}

const BirdPosition = {
  STATIONARY: 0,
  FLYING: 1
}

const BirdDirection = {
  LEFT: 0,
  RIGHT: 1
}

var Bird = (xPos, yPos, type) => {
  // create variables here

  let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  
  if (XPos < 0) {let FlyingDirection = RIGHT}
  else {let FlyingDirection = LEFT}

  currentPosition = FLYING

  return {
    
    id: generatedId,
    
    // Manual
    type: BirdType,
    x: xPos,
    y: yPos,

    // Done
    direction: flyingDirection,
    position: currentPosition
  }
}