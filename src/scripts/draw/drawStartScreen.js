import { canvas } from "../utils/canvas";
import { drawRotatedImage } from "../utils/func";
import { StartGameImage } from "../utils/images";

const size = {
  width: 400,
  height: 100,
};

export default () => {
  drawRotatedImage(
    StartGameImage,
    (canvas.width - size.width) / 2,
    (canvas.height - size.height) / 2,
    size.width,
    size.height
  );
};
