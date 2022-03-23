import Tank from "./tank";
import { PlayerImage } from "../utils/images";
import { controls } from "../utils/canvas";

class Player extends Tank {
  constructor(props) {
    super(props);
    this.image = PlayerImage;

    document.addEventListener("keydown", (e) => {
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
      switch (e.code) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight": {
          this.moving = null;
        }
      }
    });

    if (controls.active) {
      const shootButton = controls.querySelector(".shooting-controls #shoot");
      const movingButtons = Array.from(
        controls.querySelectorAll(".moving-controls *")
      );
      shootButton.addEventListener("touchstart", () => this.shoot());
      movingButtons.forEach((btn) => {
        btn.addEventListener("touchstart", () => {
          this.direction = btn.id;
          this.moving = btn.id;
        });

        btn.addEventListener("touchend", () => {
          this.moving = null;
        });
      });
    }
  }
}

export default Player;
