import { gameField } from "./constants";

const showUIOptions: ShowUIOptions = {
  visible: true,
  width: gameField[0] + 50,
  height: gameField[1] + 75,
};

figma.showUI(__html__, showUIOptions);
