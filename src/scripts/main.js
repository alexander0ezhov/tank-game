import Player from "./classes/player";
import drawTank from "./draw/drawTank";
import { ctx, canvas } from "./utils/canvas";
import init from "./init";

export default () => {
  init();
  const player = new Player();

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(player);
    requestAnimationFrame(draw);
  };

  draw();
};
