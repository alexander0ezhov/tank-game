import { canvas } from "../utils/canvas";
import Bullet from "./bullet";

class Tank {
  constructor({
    direction = "top",
    position = { x: canvas.width / 2, y: canvas.height - 50 },
    speed = 6,
    bulletSpeed = 10,
    border = 36,
    shooting = false,
    moving = null,
    bullets = [],
    shootGap = 48,
    size = 64,
    explosion,
  } = {}) {
    this.direction = direction;
    this.position = position;
    this.speed = speed;
    this.bulletSpeed = bulletSpeed;
    this.border = border;
    this.shooting = shooting;
    this.moving = moving;
    this.bullets = bullets;
    this.shootGap = shootGap;
    this.size = size;
    this.explosion = explosion;
  }

  move() {
    switch (this.direction) {
      case "top": {
        if (this.position.y < this.border) return;
        this.position.y -= this.speed;
        return;
      }
      case "bottom": {
        if (this.position.y > canvas.height - this.border) return;
        this.position.y += this.speed;
        return;
      }
      case "left": {
        if (this.position.x < this.border) return;
        this.position.x -= this.speed;
        return;
      }
      case "right": {
        if (this.position.x > canvas.width - this.border) return;
        this.position.x += this.speed;
        return;
      }
    }
  }

  shoot() {
    this.shooting = true;
    this.bullets.push(
      new Bullet({
        position: this.getShootPos(),
        direction: this.direction,
        speed: this.bulletSpeed,
      })
    );
    setTimeout(() => {
      this.shooting = false;
    }, 200);
  }

  getShootPos() {
    const { x, y } = this.position;
    switch (this.direction) {
      case "top": {
        return {
          x,
          y: y - this.shootGap,
        };
      }
      case "bottom": {
        return {
          x,
          y: y + this.shootGap,
        };
      }
      case "left": {
        return {
          x: x - this.shootGap,
          y,
        };
      }
      case "right": {
        return {
          x: x + this.shootGap,
          y,
        };
      }
    }
  }
}

export default Tank;
