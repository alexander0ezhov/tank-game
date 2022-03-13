class Bullet {
  constructor({ x, y, direction, speed = 6 } = {}) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = speed;
  }

  move() {
    switch (this.direction) {
      case "top": {
        this.y -= this.speed;
        break;
      }
      case "bottom": {
        this.y += this.speed;
        break;
      }
      case "left": {
        this.x -= this.speed;
        break;
      }
      case "right": {
        this.x += this.speed;
        break;
      }
    }
    return this;
  }
}

export default Bullet;
