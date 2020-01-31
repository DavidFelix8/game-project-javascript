class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');

    /*this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();*/

    this.background = new Background(this);
  }

  /////////////
}
