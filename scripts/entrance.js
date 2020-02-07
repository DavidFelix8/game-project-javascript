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

  /*   instructions() {
    if (!start) {
      context.font = "30pt Calibri";
      context.fillStyle = "white";
      context.fillText("Arrow Right && Arrow Left - move", 160, 250);
      context.fillText("Space - Jump", 160, 270);
      context.fillText("F - Shoot", 160, 290);
      context.fillText("Press Enter to Start", 160, 300);
    }
    if (key) {
        event.preventDefault();
        this.game.start(key);
    }
  } */

  runLogic() {
    //this.positionYair += this.velocityYair;
    if (this.positionXair < 400) {
      this.positionXair += this.velocityXair;
    } /* 
    if (this.positionXair === 400) {
      this.player.positionY = 40;
      this.player.positionX = 260;
    } */
  }

  loop() {
    this.runLogic();
    if (this.entranceIsRunning) {
      this.draw();
      this.animation = window.requestAnimationFrame(() => this.loop());
    }
  }
}
