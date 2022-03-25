import store from "./store";
import Player from "../classes/player";

export const addEnemy = (enemy) => {
  store.enemies.push(enemy);
};

export const removeEnemy = (index) => {
  store.enemies.splice(index, 1);
};

export const removeEnemyWithDelay = (index, delay = 100) =>
  setTimeout(removeEnemy.bind(null, index), delay);

export const startGame = () => {
  store.isStartScreen = false;
  store.isGameOverScreen = false;
  store.player = new Player();
  store.enemies = [];
};

export const gameOver = () => {
  setTimeout(() => {
    store.isGameOverScreen = true;
    setTimeout(() => {
      store.isStartScreen = true;
      store.isGameOverScreen = false;
    }, 2000);
  }, 400);
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
  controls.addEventListener("touchstart", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
};
