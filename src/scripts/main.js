import Player from "./classes/player";
import StartScreen from "./classes/startScreen";
import drawTank from "./draw/drawTank";
import drawStartScreen from "./draw/drawStartScreen";
import { ctx, canvas, fps } from "./utils/canvas";
import { enemyGenerator } from "./utils/func";
import init from "./init";
import { store, actions } from "./store";

export default () => {
  const { setPlayer } = actions;
  const startScreen = new StartScreen();
  init();
  enemyGenerator();
  setPlayer(new Player());

  const draw = () => {
    const { enemies, player, isStartScreen, isGameOverScreen } = store;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    switch (true) {
      case isStartScreen: {
        drawStartScreen(startScreen);
        break;
      }
      case isGameOverScreen:
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
