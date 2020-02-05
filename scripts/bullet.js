const bulletIcon = new Image();
bulletIcon.src = 'images/others/BulletIcon.png';

class Projectile {
  constructor(game, positionX, positionY, dir) {
    this.game = game;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = 10;
    this.height = 5;
    this.direction = dir;
  }

  runLogic() {
    if (this.direction === 'right') this.positionX += 2;
    else {
      this.positionX -= 2;
    }
  }

  paint() {
    const context = this.game.context;

    context.save();

    if (this.direction === 'right') {
      context.drawImage(bulletIcon, this.positionX, this.positionY, this.width, this.height);
    } else {
      context.scale(-1, 1);
      context.drawImage(
        bulletIcon,
        -this.positionX - this.width,
        this.positionY,
        this.width,
        this.height
      );
    }
    context.restore();
  }
}
