import { directionAngles } from "../utils/constants";
import { drawRotatedImage, garbageCollector } from "../utils/func";
import { BulletImage, ShootImage } from "../utils/images";

export default (tank) => {
  if (tank.moving) tank.move(tank.moving);
  drawRotatedImage(
    tank.image,
    tank.position.x,
    tank.position.y,
    64,
    64,
    directionAngles[tank.direction]
  );
  if (tank.bullets) {
    tank.bullets.forEach((bullet, idx) => {
      const bulletPos = bullet.move();
      if (garbageCollector(bulletPos)) {
        tank.bullets.splice(idx, 1);
      } else {
        tank.bullets[idx] = bulletPos;
        drawRotatedImage(
          BulletImage,
          bulletPos.x,
          bulletPos.y,
          36,
          36,
          directionAngles[bullet.direction]
        );
      }
    });
  }
  if (tank.shoot) {
    const shootPos = tank.getShootPos();
    drawRotatedImage(
      ShootImage,
      shootPos.x,
      shootPos.y,
      36,
      36,
      directionAngles[tank.direction]
    );
  }
};
