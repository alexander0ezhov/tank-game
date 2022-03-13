import Tank from "./tank";
import { EnemyImage } from "../utils/images";

class Enemy extends Tank {
  constructor(props) {
    super(props);
    this.image = EnemyImage;
  }
}

export default Enemy;
