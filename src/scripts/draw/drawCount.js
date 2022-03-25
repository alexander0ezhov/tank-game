import { canvas, ctx } from "../utils/canvas";
import { store } from "../store";

export default () => {
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "black";
  ctx.fillText(`COUNT: ${store.count}`, canvas.width - 100, 15);
};
