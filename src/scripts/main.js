import Player from "./classes/player";
import drawTank from "./draw/drawTank";
import { ctx, canvas } from "./utils/canvas";
import { enemyGenerator } from "./utils/func";
import init from "./init";
import { store } from "./store";

export default () => {
  init();
  enemyGenerator();
  const player = new Player();
  const { enemies } = store;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(player);
    enemies.forEach((enemy) => drawTank(enemy));
    requestAnimationFrame(draw);
  };

  draw();
};
