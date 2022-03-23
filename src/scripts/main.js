import Player from "./classes/player";
import drawTank from "./draw/drawTank";
import { ctx, canvas, fps } from "./utils/canvas";
import { enemyGenerator } from "./utils/func";
import init from "./init";
import { store } from "./store";
import { setPlayer } from "./store/actions";

export default () => {
  init();
  enemyGenerator();
  setPlayer(new Player());
  const { enemies, player } = store;

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (player) drawTank(player);
    enemies.forEach((enemy) => drawTank(enemy));
    setTimeout(()=>requestAnimationFrame(draw), 1000/fps)
  };

  draw();
};
