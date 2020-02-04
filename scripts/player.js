const playerImage = new Image();
playerImage.src = './images/player/player_idle_right.gif';

class Player {
  constructor(game) {
    this.game = game;
    this.width = context.canvas.width;
    this.height = 100;
    this.positionX = 260;
    this.positionY = 510;
    this.playerWidth = 80;
    this.playerHeight = 80;
    this.velocityX = 0;
    this.velocityY = 0;
    this.gravity = 10;
    this.friction = 15;
    this.nextVelX = 0;
    this.nextVelY = 0;
    this.nextPosX = 0;
    this.nextPosY = 0;
    /*  this.playerImage = playerPaused; */
    this.jumping = false;
    this.move = 0;
    this.direction = 'idle';
  }

  //Movements
  moveRight() {
    /* if (this.positionX < 820) { */
    this.positionX += 50;
    this.direction = 'right';
    /*  } */
  }

  moveLeft() {
    /* if (this.positionX > 0) { */
    this.positionX -= 50;
    this.direction = 'left';
    /* } */
  }

  jump() {
    if (!this.jumping) {
      this.velocityY = -8;
      this.direction = 'space';
      this.jumping = true;
    }
  }

  //Draw Images
  draw() {
    const context = this.game.context;

    //const $canvas = context.canvas;
    context.save();
    context.drawImage(
      playerImage,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeight
    );

    // Player change when clicked
    /* let playerImage = ''; */

    /*   if (player.direction === 'idle') {
      player_Image = './images/player/player_idle_right.gif';
    } else if (player.direction === 'right') {
      playerImage = './images/player/player_run_right.gif';
    } else if (player.direction === 'left') {
      playerImage = 'images/player/player_run_left.gif';
    } else if (player.direction === 'right' && key === 'space') {
      playerImage = 'images/player/player_shoot_right.gif';
    } else if (player.direction === 'left' && key === 'space') {
      playerImage = 'images/player/player_shoot_left.gif';
    }
    const playerImage = new Image();
    playerImage.src = player_Img;
    playerImage.addEventListener('load', () => {
      context.drawImage(playerImage, 260, 510);
    }); */

    context.restore();
  }

  runLogic() {
    //Jump
    if (keys.right in keysDown) {
      console.log('yes');
      this.move = 1;
      this.direction = 'right';
      //this.moveRight();
    } else if (keys.left in keysDown) {
      this.move = -1;
      this.direction = 'left';
      //this.moveLeft();
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
