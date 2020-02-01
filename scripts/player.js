const playerImage = new Image();
playerImage.src = 'images/player/player_idle_right.gif';

class Player {
  constructor(game) {
    this.game = game;
  }
  draw() {
    const context = this.game.context;
    const $canvas = context.canvas;
    context.save();
    context.drawImage(playerImage, 0, 0);
    context.restore();
  }
}
