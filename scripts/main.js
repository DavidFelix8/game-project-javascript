const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.addEventListener('load', () => {
  const $btnNewGame = document.getElementById('newGame_button');
  const $btnReset = document.getElementById('reset_button');
  const $btnPause = document.getElementById('pause_button');

  $btnNewGame.addEventListener('click', () => {
    game.start();
  });
  $btnReset.addEventListener('click', () => {
    game.reset();
  });
  $btnPause.addEventListener('click', () => {
    game.pause();
  });
});

/* window.onload = function() {
  this.document.getElementsByClassName('newGame_button').onclick = function() {
    game.start();
    this.document.getElementsByClassName('reset_button').onclick = function() {
      game.reset();
      this.document.getElementsByClassName('pause_button').onclick = function() {
        game.pause();
      };
    };
  };
}; */
