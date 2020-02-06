class Scoreboard {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.startGame = false;
    this.timer = 0;
  }
  //Score
  paintScore() {
    context.font = '40px monospace';
    context.fillStyle = 'black';
    context.fillText('Score: ' + this.score, 700, 50);
  }

  checkWin(timestamp) {
    const time = this.game.gameLength * 1000;

    if (this.timer === 0 && timestamp !== undefined) {
      this.timer = timestamp;
    }

    if (this.timer < timestamp - time) {
      if (this.score > 6) {
        this.game.pause();
        context.font = '40px monospace';
        context.fillStyle = 'black';
        context.fillText(`You won with a score of ${this.score}`, 160, 270);
      } else {
        this.game.gameOver();
      }
    }
  }

  //Win

  runlogic() {}
}
