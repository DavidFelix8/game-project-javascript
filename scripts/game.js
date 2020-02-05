class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.isRunning = false;
    /* this.start = false;
    this.gameOver = false; */

    this.keyboardController = new Keys(this);

    this.background = new Background(this);
    this.entrance = new Entrance(this);
    this.player = new Player(this);
    this.projectile = new Projectile(this);
    this.scoreboard = new Scoreboard(this);

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
    this.player.positionX = 260;
    this.player.positionY = 510;
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = !this.isRunning;
    } else {
      this.isRunning = !this.isRunning;
      this.loop();
    }
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
    this.projectile.paint();
    for (let monster of this.monsters) {
      monster.draw();
    }
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  runLogic() {
    this.entrance.runLogic();
    this.player.runLogic();
    for (let monster of this.monsters) {
      monster.runLogic();
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
