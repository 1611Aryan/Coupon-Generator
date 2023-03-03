import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

const width = 1000,
  height = 600;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Write "Awesome!"
ctx.font = '100px Arial';

ctx.fillText('Awesome!', 50, 100);

// Draw line under text
var text = ctx.measureText('Awesome!');
ctx.strokeStyle = 'rgba(0,0,0,0.5)';
ctx.beginPath();
ctx.lineTo(50, 102);
ctx.lineTo(50 + text.width, 102);
ctx.stroke();

// Draw cat with lime helmet
loadImage('dist/coupon/coupon.png').then(image => {
  ctx.drawImage(image, 0, 0, width, height);
  fs.writeFileSync('./image.png', canvas.toBuffer());
});
