
const CloudType = {
  FULL: 1,
  MEDIUM: 2,
  PEANUT: 3,
  WAVE: 4,
  SMALL: 5,
  HOOK: 6,
  TRIPLE: 7,
  BURST: 8
}

const CloudDirection = {
  LEFT: 0,
  RIGHT: 1
}

var Cloud = (xPos, yPos) => {
  let type = Math.floor(Math.random() * 8) + 1
  let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
  let dir = Math.round(Math.random()) // 0 or 1
  return {
    id: id,
    type: type,
    direction: dir,
    x: xPos,
    y: yPos
  }
}

export {
  Cloud,
  CloudDirection,
  CloudType
}

export default Cloud