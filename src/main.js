(function() {
    const { canvas, ctx, objects, utils, images } = TankGame
    const player = new objects.Tank()

    function drawPlayerTank() {
        if (player.moving) player.move(player.moving)
        utils.drawRotatedImage(images.Tank, player.position.x, player.position.y, 64, 64, utils.directionAngles[player.direction])
        if (player.bullets) {
            player.bullets.forEach(({x, y, direction}, idx)=>{
                const bulletPos = player.getBulletPos(x, y, direction)
                if (utils.garbageCollector(bulletPos)) {
                    player.bullets.splice(idx, 1)
                } else {
                    player.bullets[idx] = bulletPos;
                    utils.drawRotatedImage(images.Bullet, bulletPos.x, bulletPos.y, 36, 36, utils.directionAngles[direction])
                }
            })
        }
        if (player.shoot) {
            const shootPos = player.getShootPos()
            utils.drawRotatedImage(images.Shoot, shootPos.x, shootPos.y, 36, 36, utils.directionAngles[player.direction])
        }
    }

    (function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        drawPlayerTank();
        requestAnimationFrame(draw);
    })()
})()