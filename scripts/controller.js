class Keys {
  constructor(game) {
    this.game = game;
  }
  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      let key = '';
      switch (event.keyCode) {
        case 32:
          key = 'space';
          break;
        case 37:
          key = 'left';
          break;
        case 39:
          key = 'right';
          break;
        case 70:
          key = 'shoot';
      }
      if (key) {
        event.preventDefault();
        this.game.movePlayer(key);
      }
    });
  }
}
