import PlayerSrc from "../../assets/player.png";
import ShootSrc from "../../assets/shoot.png";
import BulletSrc from "../../assets/bullet.png";
import EnemySrc from "../../assets/enemy.png";
import ExplosionSrc from "../../assets/explosion.png";
import StartGameSrc from "../../assets/start-game.png";

export const PlayerImage = new Image(24, 24);
export const ShootImage = new Image(8, 8);
export const BulletImage = new Image(8, 8);
export const EnemyImage = new Image(24, 24);
export const ExplosionImage = new Image(24, 24);
export const StartGameImage = new Image();

PlayerImage.src = PlayerSrc;
ShootImage.src = ShootSrc;
BulletImage.src = BulletSrc;
EnemyImage.src = EnemySrc;
ExplosionImage.src = ExplosionSrc;
StartGameImage.src = StartGameSrc;
