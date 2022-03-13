import { canvas } from "./canvas";

export const directionAngles = {
  top: 0,
  bottom: 180,
  left: 270,
  right: 90,
};
export const TO_RADIANS = Math.PI / 180;

export const enemyStartPositions = [
  { x: 48, y: 48 },
  { x: canvas.width / 2, y: 48 },
  { x: canvas.width - 48, y: 48 },
];
