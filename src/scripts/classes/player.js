import Tank from "./tank";
import { PlayerImage } from "../utils/images";
import { gameIsRunning } from "../utils/func";
import { store } from "../store";

class Player extends Tank {
  constructor(props) {
    super(props);
    this.image = PlayerImage;

    setTimeout(() => {
      document.addEventListener("keydown", (e) => {
        if (!gameIsRunning) return;
        switch (e.code) {
          case "ArrowUp": {
            this.direction = "top";
            this.moving = "top";
            break;
          }
          case "ArrowDown": {
            this.direction = "bottom";
            this.moving = "bottom";
            break;
          }
          case "ArrowLeft": {
            this.direction = "left";
            this.moving = "left";
            break;
          }
          case "ArrowRight": {
            this.direction = "right";
            this.moving = "right";
            break;
          }
          case "Space": {
            this.shoot();
          }
        }
      });

      document.addEventListener("keyup", (e) => {
        if (!gameIsRunning) return;
        switch (e.code) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight": {
            this.moving = null;
          }
        }
      });

      if (store.controls.active) {
        store.controls.shootButton.addEventListener("touchstart", () => {
          if (!gameIsRunning) return;
          this.shoot();
        });
        store.controls.movingButtons.forEach((btn) => {
          btn.addEventListener("touchstart", () => {
            if (!gameIsRunning) return;
            this.direction = btn.id;
            this.moving = btn.id;
          });

          btn.addEventListener("touchend", () => {
            if (!gameIsRunning) return;
            this.moving = null;
          });
        });
      }
    });
  }
}

export default Player;
