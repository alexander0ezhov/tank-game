

function drawRotatedImage(image, x, y, w, h, angle) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * TO_RADIANS);
    ctx.drawImage(image, -w/2, -h/2, w, h);
    ctx.restore();
}