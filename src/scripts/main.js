import Player from "./classes/player";
import StartScreen from "./classes/startScreen";
import drawTank from "./draw/drawTank";
import drawStartScreen from "./draw/drawStartScreen";
import drawGameOverScreen from "./draw/drawGameOverScreen";
import { ctx, canvas, fps } from "./utils/canvas";
import { enemyGenerator } from "./utils/func";
import init from "./init";
import { store } from "./store";

export default () => {
  const startScreen = new StartScreen();
  init();
  enemyGenerator();

  const draw = () => {
    const { enemies, player, isStartScreen, isGameOverScreen } = store;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (true) {
      case isStartScreen: {
        drawStartScreen(startScreen);
        break;
      }
      case isGameOverScreen:
        drawGameOverScreen();
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
