/*const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');*/

const context = document.querySelector('canvas').getContext('2d');
const buffer = document.createElement('canvas').getContext('2d');

const height = document.documentElement.clientHeight - 150;
const width = document.documentElement.clientWidth;

// Min_Size
const min_size = height < width ? height : width;

context.canvas.height = min_size;
context.canvas.width = min_size;

scale = min_size / buffer.canvas.width;

// Smoothing game
context.imageSmoothingEnabled = false;

//Show the background
const backgroundImg = 'images/background/desert.png';
const backgrondImage = new Image();
backgrondImage.src = backgroundImg;

//Class
class Background {
  constructor(game) {
    this.game = game;
  }

  paint() {
    this.game.context.drawImage(backgrondImage, 0, 0, min_size, min_size);
  }
}
