//TODO - Make the winning screen work
//TODO - Fix the instructions
//TODO  - Sound continues when new game
//TODO - When pressing new game you cant win
//TODO - Time is not running when score is high

class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    //Game constants
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.gameLength = 10;

    // this.shoots = [];
    // this.monsters = [];
    // this.monsterground = [];
    //Game thing we want to set just once when the page loads for the first time
    this.entrance = new Entrance(this);
    this.keyboardController = new Keys(this);
    this.keyboardController.setKeyboardEventListeners();

    //Game is never running in the beggining
    this.isRunning = false;
  }

  makeMonster() {
    for (let i = 0; i < 10; i++) {
      let monster = new Monster(this);
      this.monsters.push(monster);
    }
    for (let i = 0; i < 10; i++) {
      let monsterground = new MonsterGround(this);
      this.monsterground.push(monsterground);
    }
  }

  start() {
    this.entrance.entranceIsRunning = false;
    delete this.entrance.animation;
    backSong.play();
    this.reset();
    if (!this.isRunning) {
      this.isRunning = !this.isRunning;
      this.loop();
    }
  }

  reset() {
    // backSong.stop();
    // this.isRunning = true;
    this.monsters = [];
    this.monsterground = [];
    this.shoots = [];
    this.makeMonster();
    this.background = new Background(this);
    this.player = new Player(this);
    this.projectile = new Projectile(this);
    this.scoreboard = new Scoreboard(this);
    this.clearScreen();
  }

  gameOver() {
    this.isRunning = false;
    this.clearScreen();
    backSong.pause();
    gameOverSong.play();
    this.background.paint();
    this.context.drawImage(gameOver_image, 150, 50);
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = !this.isRunning;
      document.getElementById('pause_button').innerText = 'Resume';
      backSong.pause();
    } else {
      this.isRunning = !this.isRunning;
      document.getElementById('pause_button').innerText = 'Pause';
      this.loop();
      backSong.play();
    }
  }

  loop(timestamp) {
    //console.log(timestamp);
    this.scoreboard.checkWin(timestamp);
    this.runLogic();
    if (this.isRunning) {
      this.paint();
      this.animation = window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
  }

  paint() {
    this.clearScreen();
    this.background.paint();
    this.player.draw();
    this.projectile.paint();
    for (let monster of this.monsters) {
      monster.draw();
    }
    for (let monsterground of this.monsterground) {
      monsterground.draw();
    }
    for (let shoot of this.shoots) {
      shoot.paint();
    }
    this.scoreboard.paintScore();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  runLogic() {
    this.player.runLogic();
    for (let shoot of this.shoots) {
      shoot.runLogic();
    }

    for (let i = 0; i < this.monsters.length; i++) {
      this.monsters[i].runLogic();
      for (let j = 0; j < this.shoots.length; j++) {
        let found = this.monsters[i].checkCollisionBullets(this.shoots[j]);
        if (found) {
          this.scoreboard.score += 1;

          this.monsters.splice(i, 1);
          this.shoots[j].speed = 0;
          this.shoots.splice(j, 1);
          break;
        } else if (
          this.shoots[j].positionX === this.$canvas.width ||
          this.shoots[j].positionX === 0
        ) {
          this.shoots.splice(j, 1);
        }
      }
    }

    for (let i = 0; i < this.monsterground.length; i++) {
      this.monsterground[i].runLogic();
      for (let j = 0; j < this.shoots.length; j++) {
        let found = this.monsterground[i].checkCollisionBullets(this.shoots[j]);
        if (found) {
          this.scoreboard.score += 1;
          this.monsterground.splice(i, 1);
          this.shoots[j].speed = 0;
          this.shoots.splice(j, 1);
          break;
        } else if (
          this.shoots[j].positionX === this.$canvas.width ||
          this.shoots[j].positionX === 0
        ) {
          this.shoots.splice(j, 1);
        }
      }
    }
    //check if won
  }

  shoot() {
    const positionX = this.player.positionX;
    const positionY = this.player.positionY;
    const width = this.player.playerWidth;
    const height = this.player.playerHeight;
    if (this.player.lastPressed === 'right') {
      const shoot = new Projectile(this, positionX + width, positionY + height / 2, 'right');
      this.shoots.push(shoot);
      //console.log(this.shoots);
    } else {
      const shoot = new Projectile(this, positionX + width, positionY + height / 2, 'left');
      this.shoots.push(shoot);
    }
  }
}
