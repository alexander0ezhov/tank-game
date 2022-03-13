import Player from "./classes/player";
import Enemy from "./classes/enemy";
import drawTank from "./draw/drawTank";
import { ctx, canvas } from "./utils/canvas";
import init from "./init";

export default () => {
  init();
  const player = new Player();
  const enemy = new Enemy({
    position: { x: canvas.width / 2, y: 48 },
    direction: "bottom",
  });

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTank(player);
    drawTank(enemy);
    requestAnimationFrame(draw);
  };

  draw();
};
