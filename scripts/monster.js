class Monster {
  constructor(game) {
    this.game = game;
    this.position = 0;
  }

  draw() {
    const bat_Img = 'images/enemie/Batfly/bat (1).png';
    const bat_image = new Image();
    bat_image.src = bat_Img;
    bat_image.addEventListener('load', () => {
      context.drawImage(bat_image, 20, 250, 60, 60);
    });
  }
}

function loop() {
  setTimeout(function() {
    loop();
  }, 1000);
}
