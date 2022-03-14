import Tank from "./tank";
import { EnemyImage } from "../utils/images";
import { directions } from "../utils/constants";

class Enemy extends Tank {
  constructor(props) {
    super(props);
    this.image = EnemyImage;

    setInterval(() => {
      const newDirection =
        directions[Math.floor(Math.random() * 5)] || directions[0];
      this.direction = newDirection;
      this.moving = newDirection;
    }, 1000);

    const shootWithDelay = (delay) =>
      setTimeout(() => {
        this.shoot();
        shootWithDelay(Math.random() * 5000);
      }, delay);

    shootWithDelay(1000);
  }
}

export default Enemy;
