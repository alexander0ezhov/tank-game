import store from "./store";

export const addEnemy = (enemy) => {
  store.enemies.push(enemy);
};

export const removeEnemy = (index) => {
  store.enemies.splice(index, 1);
};

export const removeEnemyWithDelay = (index, delay = 1000) =>
  setTimeout(removeEnemy.bind(null, index), delay);

export const setPlayer = (player) => {
  store.player = player;
};

export const startGame = () => {
  store.startScreen = false;
  store.gameOverScreen = false;
};

export const gameOver = () => {
  store.gameOverScreen = true;
};
