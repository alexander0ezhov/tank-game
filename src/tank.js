(function() {
    const { canvas } = TankGame

    class Tank {
        constructor(props) {
            this.direction = 'top';
            this.position = { x: canvas.width/2, y: canvas.height-50 };
            this.speed = 4;
            this.bulletSpeed = 6;
            this.border = 36;
            this.shoot = false;
            this.moving = null;
            this.bullets = [];
            this.shootGap = 48;

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
                        this.shoot = true;
                        this.bullets.push({...this.getShootPos(), direction: this.direction})
                        setTimeout(()=>{ this.shoot = false }, 200)
                        break;
                    }
                }
            })

            document.addEventListener("keyup", (e) => {
                switch (e.code) {
                    case "ArrowUp":
                    case "ArrowDown":
                    case "ArrowLeft":
                    case "ArrowRight": {
                        this.moving = null;
                    }
                }
            })
        }

        move() {
            switch(this.direction) {
                case 'top': {
                    if (this.position.y < this.border) return;
                    this.position.y -= this.speed;
                    return;
                }
                case 'bottom': {
                    if (this.position.y > canvas.height - this.border) return;
                    this.position.y += this.speed;
                    return;
                }
                case 'left': {
                    if (this.position.x < this.border) return;
                    this.position.x -= this.speed;
                    return;
                }
                case 'right': {
                    if (this.position.x > canvas.width - this.border) return;
                    this.position.x += this.speed;
                    return;
                }
            }
        }

        getShootPos() {
            const { x, y } = this.position
            switch(this.direction) {
                case "top": {
                    return {
                        x,
                        y: y - this.shootGap,
                    }
                }
                case "bottom": {
                    return {
                        x,
                        y: y + this.shootGap,
                    }
                }
                case "left": {
                    return {
                        x: x - this.shootGap,
                        y
                    }
                }
                case "right": {
                    return {
                        x: x + this.shootGap,
                        y
                    }
                }
            }
        }

        getBulletPos(x, y, direction) {
            switch(direction) {
                case "top": {
                    return {
                        x,
                        y: y - this.bulletSpeed,
                        direction
                    }
                }
                case "bottom": {
                    return {
                        x,
                        y: y + this.bulletSpeed,
                        direction
                    }
                }
                case "left": {
                    return {
                        x: x - this.bulletSpeed,
                        y,
                        direction
                    }
                }
                case "right": {
                    return {
                        x: x + this.bulletSpeed,
                        y,
                        direction
                    }
                }
            }
        }
    }

    TankGame.objects.Tank = Tank
})()