class SoundManager {
    constructor() {
        this.winSound = new Audio('res/audio/win.mp3');
        this.loseSound = new Audio('res/audio/lose.wav');
        this.bombSound = new Audio('res/audio/bomb.mp3');
    }
  
    playWinSound() {
        this.winSound.play();
    }
  
    playLoseSound() {
        this.loseSound.play();
    }
  
    playBombSound() {
        this.bombSound.play();
    }
  }
  