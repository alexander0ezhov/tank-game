import Tank from "./tank";
import { PlayerImage } from "../utils/images";

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
  }
}

export default Player;