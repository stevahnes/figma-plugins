export const initialGameFrameRate: number = 10;

export const maxGameFrameRate: number = 60;

export const gameFrameRateIncrement: number = 5;

export const gameColor: string[] = ["#D4C2E1", "#FFDDD1", "#BDD7EA", "#C0F0F4", "#F0C9D7"];

export const gameField: number[] = [300, 300];

export const unitSize: number[] = [10, 10];

export const enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export const initialSnakeLength: number = 10;

export const initialScore: number = 0;

export const initialDirection: Direction = Direction.UP;

export const initialHeadToTailVelocity: number[][] = [];

export const initialHeadPosition: number[] = [90, 90];

export const initialNextTailVelocity: number[] = [0, -1];
