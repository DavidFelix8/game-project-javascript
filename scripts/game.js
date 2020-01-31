class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.isRunning = true;

    /*this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();*/

    this.background = new Background(this);
  }

  start() {
    this.reset();
    this.loop();
  }

  reset() {
    this.isRunning = true;
  }

  loop() {
    this.runLogic();
    this.paint();

    if (this.isRunning) {
      setTimeout(() => {
        this.loop();
      }, 300);
    }
  }

  paint() {
    //this.clearScreen();
    this.background.paint();
  }

  runLogic() {}
}
