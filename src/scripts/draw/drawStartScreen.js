import { canvas, ctx } from "../utils/canvas";
import { drawRotatedImage } from "../utils/func";
import { StartGameImage } from "../utils/images";
import { actions } from "../store";

const size = {
  width: 500,
  height: 500,
};

export default (startScreen) => {
  ctx.font = "64px serif";
  ctx.fillStyle = "darkred";
  ctx.fillText("TANK", canvas.width / 2 - 180, canvas.height / 3 - 50);
  ctx.fillStyle = "black";
  ctx.fillText("GAME", canvas.width / 2 + 30, canvas.height / 3 - 50);
  ctx.font = "24px serif";
  ctx.fillStyle = "darkgreen";
  startScreen.menuItems.map((item, index) =>
    ctx.fillText(
      `${startScreen.carretPos === index ? "🟢" : ""}  ${item.title}`,
      canvas.width / 2 - 80,
      canvas.height * 0.6
    )
  );
};
