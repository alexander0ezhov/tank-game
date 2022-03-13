import store from "./store";

export const addEnemy = (enemy) => {
  store.enemies.push(enemy);
};

export const removeEnemy = (index) => {
  store.enemies.splice(index, 1);
};

export const removeEnemyWithDelay = (index, delay = 1000) =>
  setTimeout(removeEnemy.bind(null, index), delay);
