import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';

const width = 1000,
  height = 600,
  boxWidth = 280,
  boxHeight = 70;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Write "Awesome!"

// Draw cat with lime helmet
loadImage('dist/static/coupon/coupon.png').then(image => {
  ctx.drawImage(image, 0, 0, width, height);

  ctx.fillStyle = '#2e75b6';
  ctx.fillRect(
    width - width / 20 - boxWidth,
    height / 2.45,
    boxWidth,
    boxHeight
  );
  ctx.font = '40px Impact bold';
  ctx.fillStyle = '#ffff00';
  const text = ctx.measureText('TEST0001');
  ctx.fillText('TEST0001', width - text.width - width / 10, height / 2.05);

  // Draw line under text
  // const text = ctx.measureText('Awesome!');
  // ctx.strokeStyle = 'ffff00';

  loadImage('dist/static/logos/orion.png').then(img => {
    ctx.drawImage(img, width / 10, 0, width / 10, width / 10);
    fs.writeFileSync('gen/image.png', canvas.toBuffer());
  });
});
