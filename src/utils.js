(function () {
  const { canvas } = TankGame;

  const directionAngles = {
    top: 0,
    bottom: 180,
    left: 270,
    right: 90,
  };
  const TO_RADIANS = Math.PI / 180;

  function drawRotatedImage(image, x, y, w, h, angle) {
    const { ctx } = TankGame;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * TO_RADIANS);
    ctx.drawImage(image, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  function garbageCollector({ x, y }) {
    return x > canvas.width || y > canvas.height || y < 0 || x < 0;
  }

  TankGame.utils = {
    directionAngles,
    TO_RADIANS,
    drawRotatedImage,
    garbageCollector,
  };
})();

console.log(TankGame);
