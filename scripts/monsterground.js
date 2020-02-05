class MonsterGround {
  constructor(game) {
    this.game = game;
    //Green
    this.positionXG = 900;
    this.positionYG = 0;
    this.velocityXG = 2;
    this.widthG = 30;
    this.heightG = 30;
    this.setRandomPosition();
  }
  setRandomPosition() {
    //Height
    this.positionYG = 500 + Math.random() * 60;
    //Width
    this.velocityXG = 0.3 + Math.random() * -1;
  }
  checkCollision() {
    const player = this.game.player;
    let playerX = player.positionX + 80;
    let playerY = player.positionY + 20;
    let playerWidth = player.playerWidth;
    let playerHeight = player.playerHeight;

    let greenAnimaX = this.positionXG;
    let greenAnimaY = this.positionYG;
    let greenAnimaWidth = this.widthG;
    let greenAnimaHeight = this.heightG;

    if (
      playerX + playerWidth > greenAnimaX &&
      playerX < greenAnimaX + greenAnimaWidth &&
      playerY + playerHeight > greenAnimaY &&
      playerY < greenAnimaY + greenAnimaHeight
    ) {
      this.game.isRunning = false;
    }
  }
  runLogic() {
    this.positionXG += this.velocityXG;
    this.checkCollision();
  }
  draw() {
    context.drawImage(
      greenAnima_image,
      this.positionXG - 100,
      this.positionYG,
      this.widthG,
      this.heightG
    );
  }
}
