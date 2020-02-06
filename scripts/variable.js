//Player
const playerImageIdle = new Image();
playerImageIdle.src = './images/player/player_idle_right.gif';

const playerImageRight = new Image();
playerImageRight.src = './images/player/player_run_right.gif';

const playerImageLeft = new Image();
playerImageLeft.src = './images/player/player_run_left.gif';

const playerImageShootRight = new Image();
playerImageShootRight.src = './images/player/player_shoot_right.gif';

const playerImageShootLeft = new Image();
playerImageShootLeft.src = './images/player/player_shoot_left.gif';

/* const playerImageDeadLeft = new Image();
playerImageDeadLeft.src = './images/player/player_death_left.gif'; */

//Monsters
//Bat Fly
const bat1_Img = 'images/monster/Batfly/bat-1.png';
const bat1_image = new Image();
bat1_image.src = bat1_Img;
const bat2_Img = 'images/monster/Batfly/bat-2.png';
const bat2_image = new Image();
bat2_image.src = bat2_Img;
const bat3_Img = 'images/monster/Batfly/bat-3.png';
const bat3_image = new Image();
bat3_image.src = bat3_Img;

//Animation Green Ground
const greenAnima_Img = 'images/monster/greenAnima.png';
const greenAnima_image = new Image();
greenAnima_image.src = greenAnima_Img;

//Bullet
const bulletIcon = new Image();
bulletIcon.src = 'images/others/BulletIcon.png';

//GameOver
const gameOver_Img = 'images/others/game-over.png';
const gameOver_image = new Image();
gameOver_image.src = gameOver_Img;

//Music
//Remove Sound
function volumeChange(change) {
  const volDown = 'images/others/volumeDown.png';
  const volUp = 'images/others/volumeUp.png';
  change.src = change.bln ? volDown : volUp;
  change.bln = !change.bln;

  discover = volDown ? backSong.pause() : backSong.play();
}
//Entrance
const planeSound = new Audio('music/plane.ogg');
//Background
const backSong = new Audio('music/fundo.mp3');
//Shoot Bullet
const bulletSound = new Audio('music/shoot_sound.wav');
//Game Over
const gameOverSong = new Audio('music/game_over_bad_chest.wav');
