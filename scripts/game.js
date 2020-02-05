/* const backSong = new Audio('music/fundo.mp3'); */

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

    this.background = new Background(this);
    this.entrance = new Entrance(this);
    this.player = new Player(this);
    this.projectile = new Projectile(this);
    this.scoreboard = new Scoreboard(this);

    this.monsters = [];
    this.monsterground = [];

    //Make Sound Off
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
    /* backng.play(); */

    if (!this.animation) {
      this.loop();
    }
  }

  reset() {
    this.clearScreen();
    this.monsters = [];
    this.player.positionX = 260;
    this.player.positionY = 510;
    this.isRunning = true;
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = !this.isRunning;
      document.getElementById('pause_button').innerText = 'Resume';
    } else {
      this.isRunning = !this.isRunning;
      document.getElementById('pause_button').innerText = 'Pause';
      this.loop();
    }
    backSong.pause();
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
    for (let shoot of this.shoots) shoot.paint();
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
    for (let monsterground of this.monsterground) {
      monsterground.runLogic();
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

    //Shoot
    const positionX = this.player.positionX;
    const positionY = this.player.positionY;
    const width = this.player.playerWidth;
    const height = this.player.playerHeight;

    if (keys.f in keysDown) {
      if (this.player.lastPressed === 'right') {
        const shoot = new Projectile(this, positionX + width, positionY + height / 2, 'right');
        this.shoots.push(shoot);
      } else {
        const shoot = new Projectile(this, positionX + width, positionY + height / 2, 'left');
        this.shoots.push(shoot);
      }
    }

    for (let shoot of this.shoots) {
      shoot.runLogic();
      for (let i = 0; i < this.monsters.length; i++) {
        let found = false;

        if (found) this.monsters.splice(i, 1);
        if (shoot.positionX === this.$canvas.width || shoot.positionX === 0) {
          this.shoots.splice(i, 1);
        }
      }
      for (let i = 0; i < this.monsterground.length; i++) {
        let found = false;

        if (found) this.monster.splice(i, 1);
        if (shoot.positionX === this.$canvas.width || shoot.positionX === 0) {
          this.shoots.splice(i, 1);
        }
      }
    }
  }

  clear() {
    const { width, height } = this.$canvas;
    this.context.clearRect(0, 0, width, height);
  }
}

function volumeChange(change) {
  const volDown = 'images/others/volumeDown.png';
  const volUp = 'images/others/volumeUp.png';
  change.src = change.bln ? volDown : volUp;
  change.bln = !change.bln;

  discover = volDown ? backSong.pause() : backSong.play();
}
