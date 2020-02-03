class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.isRunning = true;

    this.background = new Background(this);
    this.player = new Player(this);
    this.monster = new Monster(this);
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
    this.draw();
    this.paint();

    /*if (this.isRunning) {
      setTimeout(() => {
        this.loop();
      }, 300);
    }*/
  }

  paint() {
    this.clearScreen();
    this.background.paint();
    this.player.draw();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }
  runLogic() {
    this.player.runLogic();
  }

  clear() {
    const { width, height } = this.$canvas;
    this.context.clearRect(0, 0, width, height);
  }

  draw() {
    this.clear();
    this.background.paint();
    //for (let obstacle of this.obstacles) obstacle.draw();
    this.player.draw();
    this.monster.draw();
  }
}
