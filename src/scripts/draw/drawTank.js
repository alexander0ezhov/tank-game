import { directionAngles } from "../utils/constants";
import { clash, drawRotatedImage, garbageCollector } from "../utils/func";
import { BulletImage, ExplosionImage, ShootImage } from "../utils/images";

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
    const isClash = clash(bullet);
    if (isClash || garbageCollector(bullet.position))
      return tank.bullets.splice(idx, 1);
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
  if (tank.explosion) {
    drawRotatedImage(
      ExplosionImage,
      tank.explosion.x,
      tank.explosion.y,
      64,
      64
    );
  }
  if (tank.bullets) {
    tank.bullets.forEach(drawBullet);
  }
  if (tank.shooting) {
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
