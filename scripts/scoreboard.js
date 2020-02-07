class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.startGame = false;
    this.timer = 0;
    this.countdown = 10;
    // this.speed = this.game.gameLength * 1000;
    this.speed = 1000;
  }
  //Score
  paintScore() {
    context.font = '40px monospace';
    context.fillStyle = 'black';
    context.fillText('Score: ' + this.score, 700, 50);
    context.fillText('Time: ' + this.countdown, 700, 100);
  }

  //Win
  checkWin(timestamp) {
    if (this.score > 6 && this.countdown <= 0) {
      //STOP THE GAME LOOP
      this.game.isRunning = !this.game.isRunning;

      this.game.clearScreen();

      //DRAW WINING SCREEN
      this.game.context.drawImage(backgrondImage, 0, 0, width, height);
      context.font = '40px monospace';
      context.fillStyle = 'black';
      context.fillText(`You won with a score of ${this.score}`, 160, 270);
    }

    //GAME OVER WHEN TIME IS OVER
    if (timestamp && this.timer < timestamp - this.speed) {
      this.timer = timestamp;
      this.countdown--;
      console.log('time ');
      if (this.countdown <= 0 && this.score < 6) {
        this.game.gameOver();
      }
    }

    // if (this.timer === 0 && timestamp !== undefined) {
    //   this.timer = timestamp;
    // }

    // if (this.timer < timestamp - this.speed) {
    //   if (this.score > 6) {
    //     this.isRunning = !this.isRunning;
    //     this.game.clearScreen();
    //     this.game.context.drawImage(backgrondImage, 0, 0, width, height);
    //     context.font = '40px monospace';
    //     context.fillStyle = 'black';
    //     context.fillText(`You won with a score of ${this.score}`, 160, 270);
    //   } else {
    //     this.game.gameOver();
    //   }
    // }
  }

  runlogic() {}
}
