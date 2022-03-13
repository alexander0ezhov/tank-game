import { canvas } from "../utils/canvas";

class Tank {
  constructor(props) {
    this.direction = "top";
    this.position = { x: canvas.width / 2, y: canvas.height - 50 };
    this.speed = 4;
    this.bulletSpeed = 6;
    this.border = 36;
    this.shoot = false;
    this.moving = null;
    this.bullets = [];
    this.shootGap = 48;
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
