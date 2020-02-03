const playerImage = new Image();
playerImage.src = './images/player/player_idle_right.gif';
class Player {
  constructor(game) {
    this.game = game;
    this.position = {
      x: 0,
      y: 0
    };
    this.playerWidth = 100;
    this.playerHeight = 100;
    //this.direction = 'idle';
  }

  moveRight() {
    //if (this.positionX < width) {

    position.x += 20;
    //}
  }

  moveLeft() {
    //if (this.positionX > width) {

    position.x -= 20;
    //}
  }

  draw() {
    const context = this.game.context;
    //const $canvas = context.canvas;
    context.save();
    context.drawImage(playerImage, 200, 500, this.playerWidth, this.playerHeight);
    /*
 let player_Img = '';

  if (player.direction === 'idle') {
    player_Img = './images/player/player_idle_right.gif';
  } else if (player.direction === 'right') {
    player_Img = './images/player/player_run_right.gif';
  } else if (player.direction === 'idle') {
    player_Img = '/starter-code/images/character-up.png';
  } else if (player.direction === 'left') {
    player_Img = 'images/player/player_run_left.gif';
  }else if (player.direction === 'right' && key === 'space'){
    player_Img = 'images/player/player_shoot_right.gif';
  }else if (player.direction === 'left' && key === 'space'){
    player_Img = 'images/player/player_shoot_left.gif';
  }
  const playerImage = new Image();
  playerImage.src = player_Img;
  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, 200, 650);
  });
    */
    context.restore();
  }

  runLogic() {}
}
