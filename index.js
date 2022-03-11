const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const TO_RADIANS = Math.PI/180;

const directionAngles = {
    top: 0,
    bottom: 180,
    left: 270,
    right: 90,
}

const TankImage = new Image(24, 24);
TankImage.src = "./assets/tank.png"
const ShootImage = new Image(8, 8);
ShootImage.src = "./assets/shoot.png"
const BulletImage = new Image(8, 8);
BulletImage.src = "./assets/bullet.png"

const player = {
    direction: 'top',
    position: { x: canvas.width/2, y: canvas.height-50 },
    speed: 4,
    bulletSpeed: 6,
    border: 36,
    shoot: false,
    moving: null,
    bullets: []
}

function drawRotatedImage(image, x, y, w, h, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * TO_RADIANS);
    ctx.drawImage(image, -w/2, -h/2, w, h);
    ctx.restore();
}

function moveTo(direction) {
    switch(direction) {
        case 'top': {
            if (player.position.y < player.border) return;
            player.position.y -= player.speed;
            return;
        }
        case 'bottom': {
            if (player.position.y > canvas.height - player.border) return;
            player.position.y += player.speed;
            return;
        }
        case 'left': {
            if (player.position.x < player.border) return;
            player.position.x -= player.speed;
            return;
        }
        case 'right': {
            if (player.position.x > canvas.width - player.border) return;
            player.position.x += player.speed;
            return;
        }
    }
}

function posShoot(x, y) {
    const shootGap = 48;
    switch(player.direction) {
        case "top": {
            return {
                x,
                y: y - shootGap,
            }
        }
        case "bottom": {
            return {
                x,
                y: y + shootGap,
            }
        }
        case "left": {
            return {
                x: x - shootGap,
                y
            }
        }
        case "right": {
            return {
                x: x + shootGap,
                y
            }
        }
    }
}

function posBullet(x, y, direction) {
    switch(direction) {
        case "top": {
            return {
                x,
                y: y - player.bulletSpeed,
                direction
            }
        }
        case "bottom": {
            return {
                x,
                y: y + player.bulletSpeed,
                direction
            }
        }
        case "left": {
            return {
                x: x - player.bulletSpeed,
                y,
                direction
            }
        }
        case "right": {
            return {
                x: x + player.bulletSpeed,
                y,
                direction
            }
        }
    }
}

function garbageCollector({x, y}) {
    return x > canvas.width || y > canvas.height || y < 0 || x < 0;
}

function drawPlayerTank() {
    if (player.moving) moveTo(player.moving)
    drawRotatedImage(TankImage, player.position.x, player.position.y, 64, 64, directionAngles[player.direction])
    if (player.bullets) {
        player.bullets.forEach(({x, y, direction}, idx)=>{
            const bulletPos = posBullet(x, y, direction)
            if (garbageCollector(bulletPos)) {
                player.bullets.splice(idx, 1)
            } else {
                player.bullets[idx] = bulletPos;
                drawRotatedImage(BulletImage, bulletPos.x, bulletPos.y, 36, 36, directionAngles[direction])
            }
        })
    }
    if (player.shoot) {
        const shootPos = posShoot(player.position.x, player.position.y)
        drawRotatedImage(ShootImage, shootPos.x, shootPos.y, 36, 36, directionAngles[player.direction])
    }
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawPlayerTank();
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowUp": {
            player.direction = "top";
            player.moving = "top";
            break;
        }
        case "ArrowDown": {
            player.direction = "bottom";
            player.moving = "bottom";
            break;
        }
        case "ArrowLeft": {
            player.direction = "left";
            player.moving = "left";
            break;
        }
        case "ArrowRight": {
            player.direction = "right";
            player.moving = "right";
            break;
        }
        case "Space": {
            player.shoot = true;
            player.bullets.push({...posShoot(player.position.x, player.position.y), direction: player.direction})
            setTimeout(()=>{player.shoot = false}, 200)
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
            player.moving = null;
        }
    }
})

draw()