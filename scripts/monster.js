class Monster {
  constructor(game) {
    this.game = game;
    //Bat
    this.positionXB = 0;
    this.positionYB = 0;
    this.velocityXB = 2;
    this.widthB = 60;
    this.heightB = 60;
    this.wings = 1;
    this.setRandomPosition();
  }

  setRandomPosition() {
    /*   this.positionX = Math.floor(Math.random() * width);
    this.velocityX = Math.floor(Math.random() * 3); */
    //Height
    this.positionYB = Math.random() * 300;
    //Width
    this.velocityXB = 0.3 + Math.random() * 2;
  }

  draw() {
    if (this.wings === 1) {
      this.wings++;
      context.drawImage(
        bat1_image,
        this.positionXB - 100,
        this.positionYB,
        this.widthB,
        this.heightB
      );
    } else if (this.wings === 2) {
      this.wings++;
      context.drawImage(
        bat2_image,
        this.positionXB - 100,
        this.positionYB,
        this.widthB,
        this.heightB
      );
    } else {
      this.wings = 1;
      context.drawImage(
        bat3_image,
        this.positionXB - 100,
        this.positionYB,
        this.widthB,
        this.heightB
      );
    }
  }

  checkCollision() {
    const player = this.game.player;
    let playerX = player.positionX + 80;
    let playerY = player.positionY + 20;
    let playerWidth = player.playerWidth;
    let playerHeight = player.playerHeight;

    let batX = this.positionXB;
    let batY = this.positionYB;
    let batWidth = this.widthB;
    let batHeight = this.heightB;
    if (
      playerX + playerWidth > batX &&
      playerX < batX + batWidth &&
      playerY + playerHeight > batY &&
      playerY < batY + batHeight
    ) {
      this.game.isRunning = false;
    }
  }

  runLogic() {
    this.positionXB += this.velocityXB;
    this.checkCollision();
    /* this.positionY += this.velocityY; */
    /* if (this.positionX < -1 || this.positionX > width) this.velocityX *= 4; */
    /*  if (this.positionX2 < -1 || this.positionX2 > 300) this.velocityX *= -1; */
  }
}
