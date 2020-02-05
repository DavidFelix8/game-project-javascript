const PROJECTILE_SPEED = 10;
const PROJECTILE_SIZE = 5;

class Projectile {
  constructor(game, positionX, positionY, direction) {
    this.game = game;
    this.positionX = positionX;
    this.positionY = positionY;
    /* this.vx = 5 * direction + vx; */
    /*     this.width = 2;
    this.height = 4; */
    /*   this.yVel = -bullet.vel;
    this.active = true; */
    /* this.positionX = bulletX;
    this.positionY = bulletY;
    this.direction = direction;
    this.speed = PROJECTILE_SPEED;
    this.size = PROJECTILE_SIZE; */
  }

  runLogic() {
    /*     const { direction, speed, positionX, positionY } = this;

    const vector = {
      x: speed * Math.sin(direction),
      y: speed * Math.cos(direction) * -1
    };

    this.positionX = {
      x: position.x + vector.x
    };
    this.positionY = {
      y: position.y + vector.y
    };*/
    /* this.x += this.vx;

    projectile.push(
      new Projectile(
        this.player.positionX,
        this.player.positionY + 4,
        this.player.direction,
        this.vx
      )
    ); */
  }

  paint() {
    const context = this.game.context;

    context.save();

    context.fillStyle = 'yellow';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);

    context.restore;
  }
}
