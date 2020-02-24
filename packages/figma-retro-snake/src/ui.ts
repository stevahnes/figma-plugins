window.onload = () => {
  initialize();
  window.requestAnimationFrame(loop);
};

document.onkeydown = key => {
  console.log(key.keyCode);
  switch (key.keyCode) {
    case 37:
      currentDirection !== Direction.RIGHT ? (currentDirection = Direction.LEFT) : null;
      break;
    case 38:
      currentDirection !== Direction.DOWN ? (currentDirection = Direction.UP) : null;
      break;
    case 39:
      currentDirection !== Direction.LEFT ? (currentDirection = Direction.RIGHT) : null;
      break;
    case 40:
      currentDirection !== Direction.UP ? (currentDirection = Direction.DOWN) : null;
      break;
    default:
      break;
  }
};

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const initialSnakeLength: number = 20;
const unitSize: number[] = [10, 10];
const initialDirection: Direction = Direction.UP;
const foodPosition: number[] = [0, 0];
const nextHeadPosition: number[] = [190, 190];
let nextTailVelocity = [0, 0];
let lastFrameUpdate: number = 0;
let snakeLength: number = initialSnakeLength;
let headToTailVelocity: number[][] = [];
let currentDirection: Direction = initialDirection;
let isFoodEaten: boolean = true;
let isDead: boolean = false;

const initialize = () => {
  for (let i: number = 0; i < snakeLength; i++) {
    headToTailVelocity.push([0, 0]);
    nextTailVelocity[1] = -1;
  }
};

const loop = () => {
  Date.now() - lastFrameUpdate > 1000 / 60 ? ((lastFrameUpdate = Date.now()), updateSnake()) : null;
  isFoodEaten ? spawnFood() : null;
  // prepare for rendering again
  window.requestAnimationFrame(loop);
};

const getCanvas2dContext = (id: string) => {
  return (document.getElementById(id) as HTMLCanvasElement).getContext("2d");
};

const spawnFood = () => {
  foodPosition[0] = Math.round(Math.random() * 39) * 10;
  foodPosition[1] = Math.round(Math.random() * 39) * 10;
  console.log(foodPosition);
  isFoodEaten = false;
};

const updateSnake = () => {
  if (!isDead) {
    // pop last tail velocity
    headToTailVelocity.pop();
    // update velocity array
    switch (currentDirection) {
      case Direction.UP:
        headToTailVelocity.unshift([0, -1]);
        break;
      case Direction.DOWN:
        headToTailVelocity.unshift([0, 1]);
        break;
      case Direction.LEFT:
        headToTailVelocity.unshift([-1, 0]);
        break;
      case Direction.RIGHT:
        headToTailVelocity.unshift([1, 0]);
        break;
      default:
        break;
    }
    // get canvas context
    const context = getCanvas2dContext("snake");
    // get next head position
    nextHeadPosition[0] > 390
      ? (nextHeadPosition[0] = 0)
      : nextHeadPosition[0] < 0
      ? (nextHeadPosition[0] = 390)
      : (nextHeadPosition[0] = nextHeadPosition[0] + unitSize[0] * headToTailVelocity[0][0]);
    nextHeadPosition[1] > 390
      ? (nextHeadPosition[1] = 0)
      : nextHeadPosition[1] < 0
      ? (nextHeadPosition[1] = 390)
      : (nextHeadPosition[1] = nextHeadPosition[1] + unitSize[1] * headToTailVelocity[0][1]);
    // update head position
    let unitPosition: number[] = [...nextHeadPosition];
    // clear the canvas
    context.fillStyle = "#333333";
    context.fillRect(0, 0, 400, 400);
    // draw food
    context.fillStyle = "#FFDDD1";
    context.fillRect(foodPosition[0], foodPosition[1], unitSize[0], unitSize[1]);
    console.log(nextHeadPosition);
    if (nextHeadPosition[0] === foodPosition[0] && nextHeadPosition[1] === foodPosition[1]) {
      isFoodEaten = true;
      snakeLength++;
      headToTailVelocity.push(nextTailVelocity);
    }
    // draw snake
    headToTailVelocity.forEach(unitVelocity => {
      context.fillStyle = "#D4C2E1";
      context.fillRect(unitPosition[0], unitPosition[1], unitSize[0], unitSize[1]);
      unitPosition[0] - unitSize[0] * unitVelocity[0] > 390
        ? (unitPosition[0] = 0)
        : unitPosition[0] - unitSize[0] * unitVelocity[0] < 0
        ? (unitPosition[0] = 400)
        : (unitPosition[0] -= unitSize[0] * unitVelocity[0]);
      unitPosition[1] - unitSize[1] * unitVelocity[1] > 390
        ? (unitPosition[1] = 0)
        : unitPosition[1] - unitSize[1] * unitVelocity[1] < 0
        ? (unitPosition[1] = 400)
        : (unitPosition[1] -= unitSize[1] * unitVelocity[1]);
      if (unitPosition[0] === nextHeadPosition[0] && unitPosition[1] === nextHeadPosition[1]) {
        isDead = true;
      }
      nextTailVelocity = [...unitVelocity];
    });
  }
};
