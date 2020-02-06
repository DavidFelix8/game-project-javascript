class Monster {
  constructor(game) {
    this.game = game;
    //Bat
    this.positionX = 0;
    this.positionY = 0;
    this.velocityX = 2;
    this.width = 60;
    this.height = 60;
    this.wings = 1;
    this.setRandomPosition();
  }

  setRandomPosition() {
    /*   this.positionX = Math.floor(Math.random() * width);
    this.velocityX = Math.floor(Math.random() * 3); */
    //Height
    this.positionY = Math.random() * 300;
    //Width
    this.velocityX = 0.3 + Math.random() * 2;
  }

  draw() {
    if (this.wings === 1) {
      this.wings++;
      context.drawImage(bat1_image, this.positionX - 100, this.positionY, this.width, this.height);
    } else if (this.wings === 2) {
      this.wings++;
      context.drawImage(bat2_image, this.positionX - 100, this.positionY, this.width, this.height);
    } else {
      this.wings = 1;
      context.drawImage(bat3_image, this.positionX - 100, this.positionY, this.width, this.height);
    }
  }

  checkCollision() {
    const player = this.game.player;
    let playerX = player.positionX + 80;
    let playerY = player.positionY + 20;
    let playerWidth = player.playerWidth;
    let playerHeight = player.playerHeight;

    let batX = this.positionX;
    let batY = this.positionY;
    let batWidth = this.width;
    let batHeight = this.height;
    if (
      playerX + playerWidth > batX &&
      playerX < batX + batWidth &&
      playerY + playerHeight > batY &&
      playerY < batY + batHeight
    ) {
      this.game.isRunning = false;
      this.game.gameOver();
    }
  }

  checkCollisionBullets(shoot) {
    //console.log('check collision bullet running');
    //console.log(shoot);
    const shootX = shoot.positionX + 55;
    const shootY = shoot.positionY;
    const shootWidth = shoot.width;
    const shootHeight = shoot.height;
    let batX = this.positionX;
    let batY = this.positionY;
    let batWidth = this.width;
    let batHeight = this.height;
    if (
      shootX + shootWidth > batX &&
      shootX < batX + batWidth &&
      shootY + shootHeight > batY &&
      shootY < batY + batHeight
    ) {
      //console.log('you shot a monster');
      return true;
      //this.game.isRunning = false;
    }
  }

  runLogic() {
    this.positionX += this.velocityX;
    this.checkCollision();
    /* this.positionY += this.velocityY; */
    /* if (this.positionX < -1 || this.positionX > width) this.velocityX *= 4; */
    /*  if (this.positionX2 < -1 || this.positionX2 > 300) this.velocityX *= -1; */
  }
}
