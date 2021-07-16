 function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`.grid[data-key="${e.keyCode}"]`);
     if (!audio) return;
     audio.currentTime = 0;
     audio.play();
     key.classList.add('play');
 };

 function removeTransition(e) {
     if (e.propertyName !== 'transform') return;
     this.classList.remove('play');
 };


 const keys = document.querySelectorAll('.grid');
 keys.forEach(key => key.addEventListener("transitionend", removeTransition));
 window.addEventListener("keydown", playSound);