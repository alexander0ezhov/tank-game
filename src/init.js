const TankGame = {
    canvas: document.getElementById('canvas'),
    ctx: this.canvas.getContext('2d'),
    images: {
        Tank: new Image(24, 24),
        Shoot: new Image(8, 8),
        Bullet: new Image(8, 8),
    },
    objects: {}
};

TankGame.images.Tank.src = "./assets/tank.png"
TankGame.images.Shoot.src = "./assets/shoot.png"
TankGame.images.Bullet.src = "./assets/bullet.png"
