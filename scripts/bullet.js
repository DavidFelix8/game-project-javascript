class Projectile {
  constructor(game, positionX, positionY, dir) {
    this.game = game;
    this.positionX = positionX;
    this.positionY = positionY - 12;
    this.width = 10;
    this.height = 8;
    this.direction = dir;
    this.speed = 2;
  }

  runLogic() {
    if (this.direction === 'right') {
      this.positionX += this.speed;
    } else {
      this.positionX -= this.speed;
    }
  }

  paint() {
    const context = this.game.context;

    context.save();

    if (this.direction === 'right') {
      context.drawImage(bulletIcon, this.positionX - 18, this.positionY, this.width, this.height);
    } else {
      context.scale(-1, 1);
      context.drawImage(
        bulletIcon,
        -this.positionX + 72 - this.width,
        this.positionY,
        this.width,
        this.height
      );
    }
    context.restore();
  }
}
