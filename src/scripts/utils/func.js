import { enemyStartPositions, TO_RADIANS } from "./constants";
import { canvas, ctx } from "./canvas";
import { actions, store } from "../store";
import { gameOver, removeEnemyWithDelay } from "../store/actions";
import Enemy from "../classes/enemy";

export const gameIsRunning = () =>
  !store.isGameOverScreen && !store.isStartScreen;

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

const explose = (pos, target, delay) => {
  target.explosion = pos;
  setTimeout(() => {
    target.explosion = null;
  }, delay);
};

export const clash = (current) => {
  const enemyTargetIndex = store.enemies.findIndex((enemy) =>
    approximatePosition(current, enemy)
  );
  if (~enemyTargetIndex) {
    const target = store.enemies[enemyTargetIndex];
    explose(current.position, target, 100);
    removeEnemyWithDelay(enemyTargetIndex);
    return ~enemyTargetIndex;
  }
  if (approximatePosition(current, store.player)) {
    explose(current.position, store.player, 300);
    gameOver();
    return true;
  }
};

export const generateEnemy = () => {
  if (store.enemies > 5) return;
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
  gameIsRunning() && generateEnemy();
  setInterval(generateEnemy, 5000);
};

export const checkIsTouchDevice = () =>
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;
