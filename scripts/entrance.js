//Airplane
const airplane_Img = 'images/others/Biplane.png';
const airplane_image = new Image();
airplane_image.src = airplane_Img;

class Entrance {
  constructor(game) {
    this.game = game;
    this.positionXair = 0;
    this.positionYair = 30;
    this.velocityXair = 2;
    this.velocityYair = 0;
    this.airplaneWidth = 100;
    this.airplaneHeight = 80;
    this.entranceIsRunning = true;
  }

  start() {
    planeSound.play();
  }

  draw() {
    this.game.context.drawImage(backgrondImage, 0, 0, width, height);
    /* context.transform() */
    /* context.scale(); */

    context.drawImage(
      airplane_image,
      this.positionXair,
      this.positionYair,
      this.airplaneWidth,
      this.airplaneHeight
    );
  }

  runLogic() {
    //this.positionYair += this.velocityYair;
    if (this.positionXair < 400) this.positionXair += this.velocityXair;
  }

  loop() {
    this.runLogic();
    if (this.entranceIsRunning) {
      this.draw();
      this.animation = window.requestAnimationFrame(() => this.loop());
    }
  }
}
