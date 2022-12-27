

import * as canvas from 'canvas';

export function generateCaptchaImage(text: string): string {
  // Create a canvas element and set its width and height
  const canvasElement = canvas.createCanvas(200, 50);
  const ctx = canvasElement.getContext('2d');

  // Set the font and draw the text on the canvas
  ctx.font = '36px sans-serif';
  ctx.fillText(text, 10, 40);

  // Convert the canvas to an image and return the image data as a base64-encoded string
  return canvasElement.toDataURL();
}
export function generateRandomString(): string {
   // Generate a random string of characters using the Math.random function
   let randomString = '';
   const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for (let i = 0; i < 5; i++) {
     randomString += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
   }
 
   return randomString;
 }