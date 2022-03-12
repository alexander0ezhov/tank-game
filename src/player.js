(function(){
    const { objects } = TankGame;
    class Player extends objects.Tank {
        constructor(props) {
            super(props);

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
                        this.bullets.push(
                            new objects.Bullet({
                                ...this.getShootPos(),
                                direction: this.direction,
                                speed: this.bulletSpeed,
                            })
                        );
                        setTimeout(() => {
                            this.shoot = false;
                        }, 200);
                        break;
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

    TankGame.objects.Player = Player
})()