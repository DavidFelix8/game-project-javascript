const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

//Show the background
const imageUrls = 'images/background/desert.png';
const image = new Image();
image.src = imageUrls;
image.addEventListener('load', () => {
  context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
});

//Class
class Background {
  constructor(game) {
    this.game = game;
    this.paint();
  }

  paint() {
    const context = this.game.context;
    const $canvas = context.canvas;

    const width = $canvas.width;
    const height = $canvas.height;

    const distance = this.game.player.position.x;
    //this.game.context.fillRect(0, 0, 100, 100);
  }
}
