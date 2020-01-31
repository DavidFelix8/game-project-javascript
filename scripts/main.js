const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

window.addEventListener('load', () => {
  const game = new Game($canvas);
  //game.start();
});
