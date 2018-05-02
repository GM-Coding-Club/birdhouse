
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
  let generatedId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  var flyingDirection = undefined
  if (xPos < 0) let flyingDirection = BirdDirection.RIGHT
  else flyingDirection = BirdDirection.LEFT
  let currentPosition = BirdPosition.FLYING
  return {
    id: generatedId,
    type: type,
    x: xPos,
    y: yPos,
    direction: flyingDirection,
    position: currentPosition
  }
}