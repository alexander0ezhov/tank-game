import store from "./store";
import { controls } from "../utils/canvas";

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
  store.isStartScreen = false;
  store.isGameOverScreen = false;
};

export const gameOver = () => {
  store.isGameOverScreen = true;
};

export const initializeTouchButtons = () => {
  const controls = document.getElementById("controls");
  controls.style.display = "block";
  store.controls.active = true;
  store.controls.shootButton = controls.querySelector(
    ".shooting-controls #shoot"
  );
  store.controls.movingButtons = Array.from(
    controls.querySelectorAll(".moving-controls *")
  );
};
