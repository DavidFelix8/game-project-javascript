const PROJECTILE_SPEED = 10;
const PROJECTILE_SIZE = 5;

class Projectile {
  constructor(game) {
    this.game = game;
    this.positionX = 0;
    this.positionY = 0;
    this.speed = PROJECTILE_SPEED;
    this.size = PROJECTILE_SIZE;
  }

  runLogic() {}
}
