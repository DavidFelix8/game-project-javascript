//Airplane
const airplane_Img = 'images/others/Biplane.png';
const airplane_image = new Image();
airplane_image.src = airplane_Img;

class Entrance {
  constructor(game) {
    this.game = game;
  }

  draw() {
    context.drawImage(
      airplane_image,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeight
    );
  }

  runLogic() {}
}
