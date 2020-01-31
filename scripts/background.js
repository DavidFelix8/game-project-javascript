const imageUrls = [];

/*Push the layers separated so I can animate one after*/
for (let i = 1; i <= 6; i++) {
  imageUrls.push(`images/background/desertL-${i}.png`);
}

/*Show the background*/
const backgroundLayers = imageUrls.map(url => {
  const image = new Image();
  image.src = url;
  return image;
});

class Background {
  constructor(game) {
    this.game = game;
  }
  paint() {
    for (let i = 0; i < backgroundLayers.length; i++) {
      context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
    }
  }
}
