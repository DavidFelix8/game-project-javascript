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
    //Dorver
    this.positionXD = 0;
    this.positionYD = 0;
    this.velocityXD = 2;
    this.widthD = 60;
    this.heightD = 80;
    //Green
    this.positionXG = 900;
    this.positionYG = 0;
    this.velocityXG = 2;
    this.widthG = 30;
    this.heightG = 30;
    this.setRandomPosition();
  }

  setRandomPosition() {
    /*   this.positionX = Math.floor(Math.random() * width);
    this.velocityX = Math.floor(Math.random() * 3); */
    //Height
    this.positionYB = Math.random() * 300;
    this.positionYD = 380 + Math.random() * 60;
    this.positionYG = 500 + Math.random() * 60;
    //Width
    this.velocityXB = 0.3 + Math.random() * 2;
    this.velocityXD = Math.random() * 2;
    this.velocityXG = 0.3 + Math.random() * -1;
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
    context.drawImage(
      dorver_image,
      this.positionXD - 100,
      this.positionYD,
      this.widthD,
      this.heightD
    );
    context.drawImage(
      greenAnima_image,
      this.positionXG - 100,
      this.positionYG,
      this.widthG,
      this.heightG
    );
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
    let dorverX = this.positionXD;
    let dorverY = this.positionYD;
    let dorverWidth = this.widthD;
    let dorverHeight = this.heightD;
    let greenAnimaX = this.positionXG;
    let greenAnimaY = this.positionYG;
    let greenAnimaWidth = this.widthG;
    let greenAnimaHeight = this.heightG;

    if (
      (playerX + playerWidth > batX &&
        playerX < batX + batWidth &&
        playerY + playerHeight > batY &&
        playerY < batY + batHeight) ||
      (playerX + playerWidth > dorverX &&
        playerX < dorverX + dorverWidth &&
        playerY + playerHeight > dorverY &&
        playerY < dorverY + dorverHeight) ||
      (playerX + playerWidth > greenAnimaX &&
        playerX < greenAnimaX + greenAnimaWidth &&
        playerY + playerHeight > greenAnimaY &&
        playerY < greenAnimaY + greenAnimaHeight)
    ) {
      this.game.isRunning = false;
    }
  }

  runLogic() {
    this.positionXB += this.velocityXB;
    this.positionXD += this.velocityXD;
    this.positionXG += this.velocityXG;
    this.checkCollision();
    /* this.positionY += this.velocityY; */
    /* if (this.positionX < -1 || this.positionX > width) this.velocityX *= 4; */
    /*  if (this.positionX2 < -1 || this.positionX2 > 300) this.velocityX *= -1; */
  }
}
