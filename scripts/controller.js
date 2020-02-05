class Keys {
  constructor(game) {
    this.game = game;
    /*  this.setKeyboardEventListeners(); */
  }

  /* setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 32:
          //this.player -= 10;
          this.game.player.jump();
          console.log('space');
          break;
        case 37:
          //this.player -= 10;
          console.log('left');

          this.game.player.moveLeft();
          break;
        case 39:
          //this.player += 10;
          this.game.player.moveRight();
          console.log('right');
          break;
      }
    }); */
}

var keysDown = new Array();
var keys = { left: 37, right: 39, space: 32, f: 70 };
addEventListener('keydown', e => {
  keysDown[e.keyCode] = true;
  if ([32, 37, 39, 70].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
});
addEventListener('keyup', e => {
  delete keysDown[e.keyCode];
});
