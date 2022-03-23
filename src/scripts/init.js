import BackgroundImage from "../assets/bg.jpeg";
import { canvas } from "./utils/canvas";

const init = () => {
  const viewportWidth = visualViewport.width - 40
  const viewportHeight = visualViewport.height - 40
  const minSize = Math.min(viewportWidth, viewportHeight)
  const resultSize = `${minSize}px`
  canvas.style.background = `url(${BackgroundImage})`;
  canvas.style.width = resultSize;
  canvas.style.height = resultSize;
};

export default init;
