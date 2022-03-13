import BackgroundImage from "../assets/bg.jpeg";
import { canvas } from "./utils/canvas";

const init = () => {
  canvas.style.background = `url(${BackgroundImage})`;
};

export default init;
