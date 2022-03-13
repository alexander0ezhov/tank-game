import { TO_RADIANS } from "./constants";
import { canvas, ctx } from "./canvas";
import { store } from "../store";

export const drawRotatedImage = (image, x, y, w, h, angle) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle * TO_RADIANS);
  ctx.drawImage(image, -w / 2, -h / 2, w, h);
  ctx.restore();
};

export const approximatePosition = (current, target) => {
  console.log(current);
  return false;
};

export const garbageCollector = ({ x, y }) =>
  x > canvas.width || y > canvas.height || y < 0 || x < 0;

export const checkClash = (current) => {
  const target = store.enemies.find((enemy) =>
    approximatePosition(current, enemy)
  );
  return "";
};
