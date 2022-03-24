import Player from "./classes/player";
import drawTank from "./draw/drawTank";
import drawStartScreen from "./draw/drawStartScreen";
import { ctx, canvas, fps } from "./utils/canvas";
import { enemyGenerator } from "./utils/func";
import init from "./init";
import { store, actions } from "./store";

export default () => {
  const { enemies, player, startScreen, gameOverScreen } = store;
  const { setPlayer } = actions;
  init();
  enemyGenerator();
  setPlayer(new Player());

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (true) {
      case !!startScreen: {
        drawStartScreen();
        break;
      }
      case !!gameOverScreen:
        break;
      default:
        if (player) drawTank(player);
        enemies.forEach((enemy) => drawTank(enemy));
        break;
    }
    setTimeout(() => requestAnimationFrame(draw), 1000 / fps);
  };

  draw();
};
