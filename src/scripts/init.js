import BackgroundImage from "../assets/bg.jpeg";
import { canvas, controls } from "./utils/canvas";
import { checkIsTouchDevice } from "./utils/func";

const resizeCanvas = () => {
  const viewportWidth = visualViewport.width;
  const viewportHeight = visualViewport.height - 48;
  const minSize = Math.min(viewportWidth, viewportHeight);
  const resultSize = `calc(${minSize}px - 3%)`;
  canvas.style.width = resultSize;
  canvas.style.height = resultSize;
};

const initializeTouchButtons = () => {
  controls.active = true;
  controls.style.display = "block";
};

const init = () => {
  canvas.style.background = `url(${BackgroundImage})`;
  resizeCanvas();
  if (checkIsTouchDevice()) initializeTouchButtons();
};

window.addEventListener("orientationchange", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

export default init;
