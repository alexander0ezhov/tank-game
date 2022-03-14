import { enemyStartPositions, TO_RADIANS } from "./constants";
import { canvas, ctx } from "./canvas";
import { actions, store } from "../store";
import { removeEnemyWithDelay } from "../store/actions";
import Enemy from "../classes/enemy";

export const drawRotatedImage = (image, x, y, w, h, angle = 0) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle * TO_RADIANS);
  ctx.drawImage(image, -w / 2, -h / 2, w, h);
  ctx.restore();
};

export const approximatePosition = (current, target) => {
  const targetHalfSize = target.size / 2;
  return (
    current.position.y >= target.position.y - targetHalfSize &&
    current.position.y <= target.position.y + targetHalfSize &&
    current.position.x >= target.position.x - targetHalfSize &&
    current.position.x <= target.position.x + targetHalfSize
  );
};

export const garbageCollector = ({ x, y }) =>
  x > canvas.width || y > canvas.height || y < 0 || x < 0;

export const checkClash = (current) => {
  const targetIndex = store.enemies.findIndex((enemy) =>
    approximatePosition(current, enemy)
  );
  if (~targetIndex) {
    const target = store.enemies[targetIndex];
    target.explosion = current.position;
    removeEnemyWithDelay(targetIndex, 100);
    setTimeout(() => {
      target.explosion = null;
    }, 100);
  }
  return ~targetIndex;
};

export const generateEnemy = () => {
  const newPosition = {
    ...(enemyStartPositions[Math.floor(Math.random() * 2.5)] ||
      enemyStartPositions[1]),
  };
  actions.addEnemy(
    new Enemy({
      position: newPosition,
      direction: "bottom",
    })
  );
};

export const enemyGenerator = () => {
  generateEnemy();
  setInterval(generateEnemy, 5000);
};
