window.onload = () => {
  initialize();
  window.requestAnimationFrame(loop);
};

document.onkeydown = key => {
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

const initialSnakeLength: number = 5;
const unitSize: number[] = [10, 10];
const initialDirection: Direction = Direction.UP;
let lastFrameUpdate: number = 0;
let headPosition: number[] = [190, 190];
let snakeLength: number = initialSnakeLength;
let headToTailVelocity: number[][] = [];
let currentDirection: Direction = initialDirection;

const initialize = () => {
  for (let i: number = 0; i < snakeLength; i++) {
    headToTailVelocity.push([0, 0]);
  }
};

const loop = () => {
  Date.now() - lastFrameUpdate > 1000 / 60 ? ((lastFrameUpdate = Date.now()), update()) : null;
  // prepare for rendering again
  window.requestAnimationFrame(loop);
};

const update = () => {
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
  const canvas = document.getElementById("snake") as HTMLCanvasElement;
  const context = canvas.getContext("2d");
  // get next head position
  headPosition[0] > 400
    ? (headPosition[0] = 0)
    : headPosition[0] < 0
    ? (headPosition[0] = 400)
    : (headPosition[0] = headPosition[0] + unitSize[0] * headToTailVelocity[0][0]);
  headPosition[1] > 400
    ? (headPosition[1] = 0)
    : headPosition[1] < 0
    ? (headPosition[1] = 400)
    : (headPosition[1] = headPosition[1] + unitSize[1] * headToTailVelocity[0][1]);
  // update head position
  let unitPosition: number[] = [...headPosition];
  // clear the canvas
  context.fillStyle = "#333333";
  context.fillRect(0, 0, 400, 400);
  // draw snake
  headToTailVelocity.forEach(unitVelocity => {
    context.fillStyle = "#D4C2E1";
    context.fillRect(unitPosition[0], unitPosition[1], unitSize[0], unitSize[1]);
    unitPosition[0] - unitSize[0] * unitVelocity[0] > 400
      ? (unitPosition[0] = 0)
      : unitPosition[0] - unitSize[0] * unitVelocity[0] < 0
      ? (unitPosition[0] = 400)
      : (unitPosition[0] -= unitSize[0] * unitVelocity[0]);
    unitPosition[1] - unitSize[1] * unitVelocity[1] > 400
      ? (unitPosition[1] = 0)
      : unitPosition[1] - unitSize[1] * unitVelocity[1] < 0
      ? (unitPosition[1] = 400)
      : (unitPosition[1] -= unitSize[1] * unitVelocity[1]);
  });
};
