class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.isRunning = false;

    this.keyboardController = new Keys(this);

    this.background = new Background(this);
    this.player = new Player(this);
    this.entrance = new Entrance(this);

    this.monsters = [];
    for (let i = 0; i < 10; i++) {
      let monster = new Monster(this);
      this.monsters.push(monster);
    }
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
      window.requestAnimationFrame(() => this.loop());
    }
  }

  paint() {
    this.clearScreen();
    this.background.paint();
    this.entrance.draw();
    this.player.draw();
    for (let monster of this.monsters) {
      monster.draw();
    }
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  runLogic() {
    this.player.runLogic();
    for (let monster of this.monsters) {
      monster.runLogic();
      this.entrance.runLogic();
    }

    // Jump
    this.player.nextVelX =
      this.player.velocityX / (1 + (this.player.friction / 1000) * 16) + this.player.move * 0.5;
    this.player.nextVelY = this.player.velocityY + (this.player.gravity / 1000) * 16;

    this.player.nextPosX = this.player.positionX + this.player.nextVelX;
    this.player.nextPosY = this.player.positionY + this.player.nextVelY;

    this.player.velocityX = this.player.nextVelX;
    this.player.velocityY = this.player.nextVelY;
    this.player.positionX = this.player.nextPosX;
    this.player.positionY = this.player.nextPosY;
  }

  clear() {
    const { width, height } = this.$canvas;
    this.context.clearRect(0, 0, width, height);
  }
}
