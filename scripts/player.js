const playerImageIdle = new Image();
playerImageIdle.src = './images/player/player_idle_right.gif';

const playerImageRight = new Image();
playerImageRight.src = './images/player/player_run_right.gif';

const playerImageLeft = new Image();
playerImageLeft.src = './images/player/player_run_left.gif';

const playerImageShootRight = new Image();
playerImageShootRight.src = './images/player/player_shoot_right.gif';

const playerImageShootLeft = new Image();
playerImageShootLeft.src = './images/player/player_shoot_left.gif';

/* const playerImageDeadLeft = new Image();
playerImageDeadLeft.src = './images/player/player_death_left.gif'; */

class Player {
  constructor(game) {
    this.game = game;
    this.height = 100;
    this.positionX = 260;
    this.positionY = 510;
    this.playerWidth = 80;
    this.playerHeight = 80;
    this.playerHeightShoot = 100;
    this.velocityX = 0;
    this.velocityY = 0;
    this.gravity = 10;
    this.friction = 15;
    this.nextVelX = 0;
    this.nextVelY = 0;
    this.nextPosX = 0;
    this.nextPosY = 0;
    this.jumping = false;
    this.move = 0;
    this.score = 0;
    this.direction = 'idle';
    this.image = playerImageIdle;
    this.imageShoot = playerImageIdle;
    this.lastPressed = '';
  }

  //Movements
  moveRight() {
    if (this.positionX < 820) {
      this.positionX += 1;
      this.direction = 'right';
    }
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 1;
      this.direction = 'left';
    }
  }

  jump() {
    if (!this.jumping) {
      this.velocityY = -8;
      this.direction = 'space';
      this.jumping = true;
    }
  }

  shoot() {
    this.direction = 'shoot';
  }

  //Draw Images
  draw() {
    const context = this.game.context;

    //const $canvas = context.canvas;
    context.save();

    // Player change when clicked

    if (this.direction === 'idle') {
      this.image = playerImageIdle;
    } else if (this.direction === 'right') {
      this.image = playerImageRight;
      this.lastPressed = 'right';
    } else if (this.direction === 'left') {
      this.image = playerImageLeft;
      this.lastPressed = 'left';
    } else if (this.lastPressed === 'right' && this.direction === 'shoot') {
      /* this.imageShoot = playerImageShootRight; */
      this.image = playerImageShootRight;
    } else if (this.lastPressed === 'left' && this.direction === 'shoot') {
      /* this.imageShoot = playerImageShootLeft; */
      this.image = playerImageShootLeft;
    } else {
      this.image = playerImageIdle;
    }

    context.drawImage(
      this.image,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeight
    );
    /* context.clearRect(this.image, this.positionX, this.positionY, canvas.width, canvas.height);

    context.drawImage(
      this.imageShoot,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeightShoot
    ); */
    context.restore();
  }

  runLogic() {
    //Jump
    if (keys.right in keysDown) {
      this.move = 1;
      this.direction = 'right';
      this.moveRight();
    } else if (keys.left in keysDown) {
      this.move = -1;
      this.direction = 'left';
      this.moveLeft();
    } else if (keys.f in keysDown) {
      this.direction = 'shoot';
      this.shoot();
    } else {
      this.move = 0;
    }

    if (this.positionY + this.height >= this.game.$canvas.height) {
      this.jumping = false;
      this.positionY = this.game.$canvas.height - this.height;
      this.velocityY = 0;
    }

    if (this.positionY <= 0) this.positionY = 0;

    if (keys.space in keysDown) this.jump();
  }
}
