const $canvas = document.querySelector('canvas');
const game = new Game($canvas);

window.addEventListener('load', () => {
  const $btnNewGame = document.getElementById('newGame_button');
  const $btnReset = document.getElementById('reset_button');
  const $btnPause = document.getElementById('pause_button');
  game.entrance.loop();

  $btnNewGame.addEventListener('click', () => {
    game.start();
  });
  $btnReset.addEventListener('click', () => {
    game.start();
  });
  $btnPause.addEventListener('click', () => {
    game.pause();
  });
});
