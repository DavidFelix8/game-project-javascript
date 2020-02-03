const $canvas = document.querySelector('canvas');
window.addEventListener('load', () => {
  const game = new Game($canvas);
  game.start();
});
