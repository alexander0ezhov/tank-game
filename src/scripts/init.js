import BackgroundImage from "../assets/bg.jpeg";
import { canvas, controls } from "./utils/canvas";
import { checkIsTouchDevice } from "./utils/func";

const resizeCanvas = () => {
  const viewportWidth = visualViewport.width - 40;
  const viewportHeight = visualViewport.height - 40;
  const minSize = Math.min(viewportWidth, viewportHeight);
  const resultSize = `${minSize}px`;
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
