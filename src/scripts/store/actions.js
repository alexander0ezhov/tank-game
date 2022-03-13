import store from "./store";

export const addEnemy = (enemy) => {
  store.enemies.push(enemy);
};

export const removeEnemy = (index) => {
  store.enemies.splice(index, 1);
};
