class Bullet {
  constructor({ position, direction, speed = 6, size = 36 } = {}) {
    this.position = position;
    this.direction = direction;
    this.speed = speed;
    this.size = size;
  }

  move() {
    switch (this.direction) {
      case "top": {
        this.position.y -= this.speed;
        break;
      }
      case "bottom": {
        this.position.y += this.speed;
        break;
      }
      case "left": {
        this.position.x -= this.speed;
        break;
      }
      case "right": {
        this.position.x += this.speed;
        break;
      }
    }
    return this;
  }
}

export default Bullet;
