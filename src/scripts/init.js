import BackgroundImage from "../assets/bg.jpeg";
import { canvas } from "./utils/canvas";

const resizeCanvas = ()=>{
  const viewportWidth = visualViewport.width - 40
  const viewportHeight = visualViewport.height - 40
  const minSize = Math.min(viewportWidth, viewportHeight)
  const resultSize = `${minSize}px`
  canvas.style.width = resultSize;
  canvas.style.height = resultSize;
}

const init = () => {
  canvas.style.background = `url(${BackgroundImage})`;
  resizeCanvas()
};

window.addEventListener("orientationchange", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

export default init;
