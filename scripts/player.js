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
      this.positionX += 30;
      this.direction = 'right';
      this.lastPressed === 'right';
    }
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 30;
      this.direction = 'left';
      this.lastPressed === 'left';
    }
  }

  shoot() {
    this.direction = 'shoot';
    const positionX = this.positionX;
    const positionY = this.positionY;
    const width = this.playerWidth;
    const height = this.playerHeight;
    if (this.lastPressed === 'right') {
      const shoot = new Projectile(this.game, positionX + width, positionY + height / 2, 'right');
      this.game.shoots.push(shoot);
      //set a condition that checks if the game is in mute or not
      bulletSound.play();
    } else {
      const shoot = new Projectile(this.game, positionX + width, positionY + height / 2, 'left');
      this.game.shoots.push(shoot);
      bulletSound.play();
    }
  }

  jump() {
    this.velocityY = -5;
  }

  jumpingLogic() {
    this.velocityX = this.velocityX / (1 + (this.friction / 1000) * 16);
    this.velocityY = this.velocityY + (this.gravity / 1000) * 16;

    this.positionX = this.positionX + this.velocityX;
    this.positionY = this.positionY + this.velocityY;
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
    /* 
    context.drawImage(
      this.imageShoot,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeightShoot
    ); 
    */
    context.restore();
  }

  runLogic() {
    this.jumpingLogic();
    if (this.positionY + this.height >= this.game.$canvas.height) {
      this.jumping = false;
      this.positionY = this.game.$canvas.height - this.height;
      this.velocityY = 0;
    }
    if (this.positionY <= 0) this.positionY = 0;
  }
}
