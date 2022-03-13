import { directionAngles } from "../utils/constants";
import { checkClash, drawRotatedImage, garbageCollector } from "../utils/func";
import { BulletImage, ShootImage } from "../utils/images";

export default (tank) => {
  if (tank.moving) tank.move(tank.moving);
  drawRotatedImage(
    tank.image,
    tank.position.x,
    tank.position.y,
    tank.size,
    tank.size,
    directionAngles[tank.direction]
  );

  const drawBullet = (bullet, idx) => {
    bullet.move();
    if (checkClash(bullet)) return () => {};
    if (garbageCollector(bullet.position)) return tank.bullets.splice(idx, 1);
    tank.bullets[idx] = bullet;
    drawRotatedImage(
      BulletImage,
      bullet.position.x,
      bullet.position.y,
      bullet.size,
      bullet.size,
      directionAngles[bullet.direction]
    );
  };
  if (tank.bullets) {
    tank.bullets.forEach(drawBullet);
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
