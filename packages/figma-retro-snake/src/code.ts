import { gameField } from "./constants";

const showUIOptions: ShowUIOptions = {
  visible: true,
  width: gameField[0],
  height: gameField[1],
};

figma.showUI(__html__, showUIOptions);
