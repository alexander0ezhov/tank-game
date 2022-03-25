import { canvas, ctx } from "../utils/canvas";

export default () => {
  ctx.font = "64px sans-serif";
  ctx.fillStyle = "darkred";
  ctx.fillText("GAME OVER", canvas.width / 2 - 180, canvas.height / 3 - 50);
};
