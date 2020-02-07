class Keys {
  constructor(game) {
    this.game = game;
  }
  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 32:
          //SPACE
          this.game.player.jump();
          break;
        case 37:
          //LEFT
          this.game.player.moveLeft();

          break;
        case 39:
          //RIGHT
          this.game.player.moveRight();

          break;
        case 70:
          // "F" =
          this.game.player.shoot();
      }
    });
  }
}
