
# Challenges
We have work to do! I'm going to simply small problems for you guys so that you can fill in the gaps and make this game work. I'll give each of you tasks, and over the next couple of days or so, we'll hammer them out and finish this game. 

## Brady

### 🛑 Our Clouds keep disappearing 🙀
Clayton found an [issue](https://github.com/GM-Coding-Club/birdhouse/issues/2), and it looks like our clouds are running away! Let me quick explain how the clouds work, and what might be going wrong, and how you can fix the issue. At the start of our game, we generate 200 different clouds, giving them a location somewhere on or off the screen (x and y coordinates), a sprite, and a direction as to where they travel. Each game tick, we move the clouds 1 pixel based on their direction: so we add or remove 1 to the current cloud x coordinate. Our world is a grid, and every cloud always has an x and y coordinate to articulate where it is in that space. Since our clouds are drifting, they eventually go off screen. That's a problem! One solution for this problem is that we don't spawn clouds at the start of the game, but rather create new clouds on a timer (every 20 seconds maybe). When those clouds eventually move off screen, we'll delete them, and forget about them. Because we're creating a new cloud every 20 seconds or so, the clouds we delete will be replaced by new clouds. That's a lot of steps, though, and would require us to remember the last time that we spawned a cloud, to make events to know when clouds go off screen, to track how high a user has built their birdhouse tower so we can spawn clouds at the appropriate height, and more. A lot of moving pieces! But I have a simpler solution — and it's broken! Rather than spawning clouds, we generate an appropriate number in the beginning (200), with y's that will be useful in the future, and x's that will allow us to have a constant flow of clouds. So we spawn clouds all over a giant grid that's bigger than the size of our screen, and just wait until they move into the screen view, whether its because a user is scrolling, or the clouds are moving. And when those clouds reach a barrier, we flip them, so we reuse the same clouds. A lot simpler than spawning and deleting clouds, right? This work takes place in the `reducers/clouds.js`. The `initialState` takes an array of 200 randomly generated clouds from the `randomClouds()` method. Every `GAME_TICK` event, we call the `gameTick()` method, which uses `moveClouds()` and `cloudAssign()` to return our new array of adjusted clouds. The magic happens in `cloudAssign()`: that's where we actually change the x coordinate, and flip directions. 

## Clayton

## Hayden

## Kyle 

