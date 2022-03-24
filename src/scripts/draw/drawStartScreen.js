import { canvas } from "../utils/canvas";
import { drawRotatedImage } from "../utils/func";
import { StartGameImage } from "../utils/images";

const size = {
  width: 500,
  height: 500,
};

export default () => {
  drawRotatedImage(
    StartGameImage,
    (canvas.width/2),
    (canvas.height/3),
    size.width,
    size.height
  );
};
