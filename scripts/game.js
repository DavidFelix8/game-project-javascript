class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.$canvas.height = $canvas.height;
    this.$canvas.width = $canvas.width;
    this.context = this.$canvas.getContext('2d');
    this.isRunning = false;
    this.shoots = [];
    /* this.start = false;
    this.gameOver = false; */

    this.keyboardController = new Keys(this);
    this.keyboardController.setKeyboardEventListeners();

    this.background = new Background(this);
    this.entrance = new Entrance(this);
    this.player = new Player(this);
    this.projectile = new Projectile(this);
    this.scoreboard = new Scoreboard(this);

    this.monsters = [];
    this.monsterground = [];
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
    this.reset();
    this.makeMonster();
    backSong.play();
    if (!this.animation) {
      this.loop();
    }
  }

  reset() {
    this.clearScreen();
    // backSong.stop();
    this.monsters = [];
    this.monsterground = [];
    /*  this.player.positionX = 260;
    this.player.positionY = 510; 
    this.player.direction = 'idle'; */
    this.isRunning = true;
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

  loop() {
    this.runLogic();
    this.paint();
    if (this.isRunning) {
      this.animation = window.requestAnimationFrame(() => this.loop());
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
    this.entrance.runLogic();
    this.player.runLogic();
    //console.log(this.shoots);
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

  movePlayer(key) {
    switch (key) {
      case 'right':
        //console.log(key);
        this.player.moveRight();
        //move player up
        break;
      case 'left':
        //console.log(key);
        this.player.moveLeft();
        //move player dow
        break;
      case 'space':
        // console.log(key);
        this.player.jumpThatWorks();
        //move player up
        break;
      case 'shoot':
        //console.log(key);
        this.player.shoot();
        //shoot
        break;
    }
  }

  clear() {
    const { width, height } = this.$canvas;
    this.context.clearRect(0, 0, width, height);
  }
}
