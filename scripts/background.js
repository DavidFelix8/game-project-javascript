const imageUrls = 'images/background/desert.png';
const image = new Image();
image.src = imageUrls;
image.addEventListener('load', () => {
  context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
});

//const imageUrls = [];

//Push the layers separated so I can animate one after
/*for (let i = 1; i <= 6; i++) {
  imageUrls.push(`./images/background/desertL-${i}.png`);
}*/

//Show the background
/*const backgroundLayers = imageUrls.map(imageUrls => {
  const image = new Image();
  image.src = imageUrls;
  return image;
});*/

class Background {
  constructor(game) {
    this.game = game;
    this.paint();
  }

  paint() {
    this.game.context.fillRect(0, 0, 100, 100);
    /*for (let i = 0; i < backgroundLayers.length; i++) {
      image.addEventListener('load', () => {
        context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
      });
    }*/
  }
}
