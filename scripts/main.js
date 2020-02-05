const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.addEventListener('load', () => {
  /*  const $btnNewGame = document.getElementsByClassName('newGame_button');
  const $btnReset = document.getElementsByClassName('reset_button');
  const $btnPause = document.getElementsByClassName('pause_button');

  $btnNewGame.addEventListener('click', () => {
    game.start();
  });
  $btnReset.addEventListener('click', () => {
    game.reset();
  });
  $btnPause.addEventListener('click', () => {
    game.pause();
  }); */

  game.start();
});
