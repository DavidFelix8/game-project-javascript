class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.startGame = false;
  }
  //Score
  paintScore() {
    context.font = '40px monospace';
    context.fillStyle = 'black';
    context.fillText('Score: ' + this.score, 700, 50);
  }

  //Start Game
  /*  startGame() {
    if (!startGame) {
      context.font = '3rem Calibri';
      context.fillStyle = 'white';
      context.fillText('Press Enter to Start', 47, 180);
      context.font = '2rem Calibri';
      context.fillText('Arrow Right && Arrow Left - move', 47, 210);
      context.fillText('Space -  jump', 47, 240);
      context.fillText('F -  fire', 47, 240);
    }
    if (keysDown[keys]) startGame = true;
  } */

  //GameOver
  gameOver() {
    // if (this.monsters.checkCollision() || this.monsterground.checkCollision()) {
    this.game.isRunning = false;
    context.font = '5rem Calibri';
    context.fillStyle = 'white';
    context.fillText('Game Over', 250, 300);

    /* context.drawImage(
      this.gameOver_Img,
      this.positionX,
      this.positionY,
      this.playerWidth,
      this.playerHeight
    ); */
    // }
    // backSong.pause();
  }

  //Win

  runlogic() {}
}
