import BackgroundImage from "../assets/bg.jpeg";
import { canvas } from "./utils/canvas";
import { checkIsTouchDevice } from "./utils/func";
import { store, actions } from "./store";

const resizeCanvas = () => {
  const viewportWidth = visualViewport.width;
  const viewportHeight = visualViewport.height - 48;
  const minSize = Math.min(viewportWidth, viewportHeight);
  const resultSize = `calc(${minSize}px - 3%)`;
  canvas.style.width = resultSize;
  canvas.style.height = resultSize;
};

const init = () => {
  canvas.style.background = `url(${BackgroundImage})`;
  resizeCanvas();
  if (checkIsTouchDevice()) actions.initializeTouchButtons();
};

window.addEventListener("orientationchange", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

export default init;
